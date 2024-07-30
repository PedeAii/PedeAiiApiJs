import 'dotenv/config.js';
import axios from 'axios';
import { step, step_message } from '../../../../utils/flow-steps';
import { Request, Response } from 'express';

const { GRAPH_API_TOKEN, WEBHOOK_VERIFY_TOKEN } = process.env;

interface Chat {
    id?: string;
    from?: string;
    text?: {
        body: string;
    };
    interactive?: {
        button_reply?: {
            title: string;
            payload: string;
        };
    };
    quick_reply?: {
        payload: string;
    };
    type?: string;
};

let cep = '';
let current_step = 1;
let message: Chat = {};
let consumerName = '';

export class WhatsAppWebHookService {
//   async execute(req: Request, res: Response) {
//       const { value } = req.body.entry?.[0]?.changes[0];

//     message = value?.messages?.[0];
//     consumerName = value?.contacts?.[0].profile.name ?? null;

//     if (this.hasMessageText() || this.isClickedButton()) {
//         /// REGISTRO DE LOGS /////////////////////////////////////////////////////// ///
//         console.log('\n------------------------------------------------------');
//         console.log('Mensagem do chat do WhatsApp');
//         console.log(message);
//         console.log('\ncurrent_step: ' + current_step);

//         const business_phone_number_id = value?.metadata?.phone_number_id;
//         const payload = await this.getPayloadToSend();

//         /// REGISTRO DE LOGS /////////////////////////////////////////////////////// ///
//         console.log('\ncorpo da mensagem/template');
//         console.log(payload);
//         console.log('------------------------------------------------------');

//         await axios({
//             method: "POST",
//             url: `https://graph.facebook.com/v20.0/${business_phone_number_id}/messages`,
//             headers: {
//                 Authorization: `Bearer ${GRAPH_API_TOKEN}`,
//             },
//             data: payload
//         });

//         await axios({
//             method: "POST",
//             url: `https://graph.facebook.com/v20.0/${business_phone_number_id}/messages`,
//             headers: {
//                 Authorization: `Bearer ${GRAPH_API_TOKEN}`,
//             },
//             data: this.getReadStatusPayload()
//         });
//     }

//     res.sendStatus(200);
//   }

//     async verify(req: Request, res: Response) {
//     const mode = req.query["hub.mode"];
//     const token = req.query["hub.verify_token"];
//         const challenge = req.query["hub.challenge"];
//         console.log(WEBHOOK_VERIFY_TOKEN)

//     if (mode !== "subscribe" && token !== WEBHOOK_VERIFY_TOKEN) {
//       res.sendStatus(403);
//     }

//     res.status(200).send(challenge);
//     console.log("Webhook verified successfully!");
//   }

//   async getPayloadToSend() {
//     var payload = this.getMessageThroughStep();

//     switch (current_step) {
//         case step.WELCOME_MESSAGE:
//             current_step = step.CHECK_WELCOME_MESSAGE_BUTTON_CHOICE;
//             return payload;

//         case step.TYPE_THE_CEP:
//         case step.TYPE_AN_CORRECT_CEP:
//             current_step = step.CONFIRM_ADDRESS;
//             return payload;

//         case step.CONFIRM_ADDRESS:
//             this.setCep(message.text.body);
//             const address = await getAddessByCep();

//             if (this.empty(address)) {
//                 current_step = step.TYPE_AN_CORRECT_CEP;
//                 return this.getPayloadToSend();
//             }

//             payload.interactive.body.text = payload.interactive.body.text.replace('{{1}}', address.logradouro);
//             payload.interactive.body.text = payload.interactive.body.text.replace('{{2}}', address.bairro);
//             payload.interactive.body.text = payload.interactive.body.text.replace('{{3}}', address.localidade);
//             payload.interactive.body.text = payload.interactive.body.text.replace('{{4}}', address.uf);
//             payload.interactive.body.text = payload.interactive.body.text.replace('{{5}}', address.cep);
//             current_step = step.CHECK_CONFIRM_ADDRESS_BUTTON_CHOICE;

//             return payload;

//         case step.THANKFUL_MESSAGE:
//             current_step = step.WELCOME_MESSAGE;
//             return payload;
            
//     }

//     return null;
//   }

//   getMessageThroughStep() {
//     const destiny = {
//         "messaging_product": "whatsapp",
//         "to": message.from,
//     }

//     this.setCurrentStepByButtonChoice();

//     const message_base = JSON.parse(
//         JSON.stringify(step_message[current_step])
//     );

//     return { ...destiny, ...message_base };
//   }

//   setCurrentStepByButtonChoice() {
//       var answer: string|undefined = '';

//       switch (current_step) {
//           case step.CHECK_WELCOME_MESSAGE_BUTTON_CHOICE:
//               answer = this.getButtonAnswer();

//               if (!answer) {
//                   current_step = step.WELCOME_MESSAGE;
//                   break;
//               }

//               if (answer === "Sim") {
//                 current_step = step.TYPE_THE_CEP;
//               } else {
//                   current_step = step.THANKFUL_MESSAGE;
//               }

//               break;

//           case step.CHECK_CONFIRM_ADDRESS_BUTTON_CHOICE:
//               answer = this.getButtonAnswer();

//               if (!answer) {
//                   current_step = step.CONFIRM_ADDRESS;
//                   message.text.body = cep;
//                   break;
//               }

//               if (this.getButtonAnswer() === "Sim") {
//                   current_step = step.THANKFUL_MESSAGE;
//               } else {
//                   current_step = step.TYPE_THE_CEP;
//               }

//               break;
//       }
//   }

//   // @todo criar exception caso não existir um clique de botão
//   getButtonAnswer() {
//       if (!this.isClickedButton()) return undefined;

//       switch (message?.interactive?.button_reply?.title) {
//           case "Sim": return "Sim";
//           case "Não": return "Não";
//       }
//   }

//   hasMessageText() {
//       if (!message) {
//           return false;
//       }

//       return message?.type === "text";
//   }

//   isClickedButton() {
//       if (!message) {
//           return false;
//       }

//       return message?.type === "interactive";
//   }

//   getReadStatusPayload() {
//       return {
//           messaging_product: "whatsapp",
//           status: "read",
//           message_id: message.id
//       }
//   }

//   setCep(new_cep: {
//     id?: string;
//     from?: string;
//     text?: {
//         body: string;
//     };
//     interactive?: {
//         button_reply?: {
//             title: string;
//             payload: string;
//         };
//     };
//     quick_reply?: {
//         payload: string;
//     };
//     type?: string;
// }) {
//       cep = new_cep;
//   }

//   empty(value: any) {
//       switch (value) {
//           case null:
//           case undefined:
//           case false:
//           case {}:
//           case "":
//           case '':
//           case ``:
//           case 0:
//               return true;
//           default:
//               return false;
//       }
//   }
}

async function getAddessByCep() {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        if (!response.data.erro) {
            return undefined;
        }

        return response.data;
    } catch (error: any) {
        if (error.response.status === 400) {
            return undefined;
        }
    }
}
