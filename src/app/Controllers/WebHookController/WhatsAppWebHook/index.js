import * as typeExpress from "express";
import { WebHookWhatsAppService } from "../../../Services/WebHookWhatsAppService/index.js";


class WhatsAppWebHookController {
  /**
   *
   * @param {typeExpress.Request} req
   * @param {typeExpress.Response} res
   */
  async execute(req, res) {
    await new WebHookWhatsAppService().execute(req, res);
  }

  /**
   *
   * @param {typeExpress.Request} req
   * @param {typeExpress.Response} res
   */
  async verify(req, res) {
    await new WebHookWhatsAppService().verify(req, res);
  }
}

export default new WhatsAppWebHookController();
