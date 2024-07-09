import 'dotenv/config.js';
import { Router } from 'express';
import axios from 'axios';
import { step, step_message } from '../../../utils/flow-steps.js';

const { GRAPH_API_TOKEN, WEBHOOK_VERIFY_TOKEN } = process.env;

export class WebHookWhatsAppService {
  current_step = 1;
  message = {};
  cep = '';
  consumerName = null;

  async execute(req, res) {
    const { value } = req.body.entry?.[0]?.changes[0]

    this.message = value?.messages?.[0];
    this.consumerName = value?.contacts?.[0].profile.name ?? null;

    if (this.hasMessageText() || this.isClickedButton()) {
        /// REGISTRO DE LOGS /////////////////////////////////////////////////////// ///
        console.log('\n------------------------------------------------------');
        console.log('Mensagem do chat do WhatsApp');
        console.log(this.message);
        console.log('\ncurrent_step: ' + this.current_step);

        const business_phone_number_id = value?.metadata?.phone_number_id;
        const payload = await this.getPayloadToSend();

        /// REGISTRO DE LOGS /////////////////////////////////////////////////////// ///
        console.log('\ncorpo da mensagem/template');
        console.log(payload);
        console.log('------------------------------------------------------');

        await axios({
            method: "POST",
            url: `https://graph.facebook.com/v20.0/${business_phone_number_id}/messages`,
            headers: {
                Authorization: `Bearer ${GRAPH_API_TOKEN}`,
            },
            data: payload
        });

        await axios({
            method: "POST",
            url: `https://graph.facebook.com/v20.0/${business_phone_number_id}/messages`,
            headers: {
                Authorization: `Bearer ${GRAPH_API_TOKEN}`,
            },
            data: this.getReadStatusPayload()
        });
    }

    res.sendStatus(200);
  }

  async verify(req, res) {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode !== "subscribe" && token !== WEBHOOK_VERIFY_TOKEN) {
      res.sendStatus(403);
    }

    res.status(200).send(challenge);
    console.log("Webhook verified successfully!");
  }

  async getPayloadToSend() {
    var payload = this.getMessageThroughStep();

    switch (this.current_step) {
        case step.WELCOME_MESSAGE:
            this.current_step = step.CHECK_WELCOME_MESSAGE_BUTTON_CHOICE;
            return payload;

        case step.TYPE_THE_CEP:
        case step.TYPE_AN_CORRECT_CEP:
            this.current_step = step.CONFIRM_ADDRESS;
            return payload;

        case step.CONFIRM_ADDRESS:
            this.setCep(this.message.text.body);
            const address = await getAddessByCep();

            if (empty(address)) {
                this.current_step = step.TYPE_AN_CORRECT_CEP;
                return this.getPayloadToSend();
            }

            payload.interactive.body.text = payload.interactive.body.text.replace('{{1}}', address.logradouro);
            payload.interactive.body.text = payload.interactive.body.text.replace('{{2}}', address.bairro);
            payload.interactive.body.text = payload.interactive.body.text.replace('{{3}}', address.localidade);
            payload.interactive.body.text = payload.interactive.body.text.replace('{{4}}', address.uf);
            payload.interactive.body.text = payload.interactive.body.text.replace('{{5}}', address.cep);
            this.current_step = step.CHECK_CONFIRM_ADDRESS_BUTTON_CHOICE;

            return payload;

        case step.THANKFUL_MESSAGE:
            this.current_step = step.WELCOME_MESSAGE;
            return payload;
    }
  }

  getMessageThroughStep() {
    const destiny = {
        "messaging_product": "whatsapp",
        "to": this.message.from,
    }

    this.setCurrentStepByButtonChoice();

    const message_base = JSON.parse(
        JSON.stringify(step_message[this.current_step])
    );

    return { ...destiny, ...message_base };
  }

  setCurrentStepByButtonChoice() {
      var answer = '';

      switch (this.current_step) {
          case step.CHECK_WELCOME_MESSAGE_BUTTON_CHOICE:
              answer = this.getButtonAnswer();

              if (!answer) {
                  this.current_step = step.WELCOME_MESSAGE;
                  break;
              }

              if (answer === "Sim") {
                  this.current_step = step.TYPE_THE_CEP;
              } else {
                  this.current_step = step.THANKFUL_MESSAGE;
              }

              break;

          case step.CHECK_CONFIRM_ADDRESS_BUTTON_CHOICE:
              answer = this.getButtonAnswer();

              if (!answer) {
                  this.current_step = step.CONFIRM_ADDRESS;
                  this.message.text.body = this.cep;
                  break;
              }

              if (this.getButtonAnswer() === "Sim") {
                  this.current_step = step.THANKFUL_MESSAGE;
              } else {
                  this.current_step = step.TYPE_THE_CEP;
              }

              break;
      }
  }

  // @todo criar exception caso não existir um clique de botão
  getButtonAnswer() {
      if (!this.isClickedButton()) return undefined;

      switch (this.message?.interactive?.button_reply?.title) {
          case "Sim": return "Sim";
          case "Não": return "Não";
      }
  }

  hasMessageText() {
      if (!this.message) {
          return false;
      }

      return this.message?.type === "text";
  }

  isClickedButton() {
      if (!this.message) {
          return false;
      }

      return this.message?.type === "interactive";
  }

  getReadStatusPayload() {
      return {
          messaging_product: "whatsapp",
          status: "read",
          message_id: this.message.id
      }
  }

  setCep(new_cep) {
      this.cep = new_cep;
  }

  empty(value) {
      switch (value) {
          case null:
          case undefined:
          case false:
          case {}:
          case "":
          case '':
          case ``:
          case 0:
              return true;
          default:
              return false;
      }
  }
}

async function getAddessByCep() {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        if (!empty(response.data.erro)) {
            return undefined;
        }

        return response.data;
    } catch (error) {
        if (error.response.status === 400) {
            return undefined;
        }
    }
}
