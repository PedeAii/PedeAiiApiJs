import { Request, Response } from "express";
import { WhatsAppWebHookService } from "../Domain/Service/whatsapp-web-hook-service";

export class WhatsAppWebHookController {
  constructor(private readonly whatsAppWebHookService: WhatsAppWebHookService) { }

  async test(req: Request, res: Response) {
    return res.status(200).json({ ok: true });
  }

  async execute(req: Request, res: Response) {
    //Passar por TDO
    return this.whatsAppWebHookService.execute(req, res);
  }

  async verify(req: Request, res: Response) {
    //Passar por TDO

    return this.whatsAppWebHookService.verify(req, res);
  }
}
