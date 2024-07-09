import { WebHookWhatsAppService } from "../../../Services/WebHookWhatsAppService/index.js";

class WhatsAppWebHookController {
  /**
   * @description Constructor
   * @param {WebHookWhatsAppService} webHookService
   */
  constructor(webHookService = new WebHookWhatsAppService()) {
    this.whatsAppWebHookService = webHookService;
  }

  async execute(req, res) {
    await this.whatsAppWebHookService.execute(req, res);
  }

  async verify(req, res) {
    await this.whatsAppWebHookService.verify(req, res);
  }
}

export default new WhatsAppWebHookController();
