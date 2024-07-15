import {Request, Response} from "express";
import { WebHookWhatsAppService } from "../../../Services/WebHookWhatsAppService";


class WhatsAppWebHookController {
  async execute(req: Request, res: Response) {
    await new WebHookWhatsAppService().execute(req, res);
  }

  /**
   *
   * @param {typeExpress.Request} req
   * @param {typeExpress.Response} res
   */
  async verify(req: Request, res: Response) {
    await new WebHookWhatsAppService().verify(req, res);
  }
}

export default new WhatsAppWebHookController();
