import { Request, Response } from "express";
import { TextMessagesRepository } from "Kernel/Repositories/Messages/TextMessagesRepository";

export class WhatsAppWebHookController {
    constructor() { }

    async execute(req: Request, res: Response) {
        return res.status(200).json({ ok: true });
    }
}
