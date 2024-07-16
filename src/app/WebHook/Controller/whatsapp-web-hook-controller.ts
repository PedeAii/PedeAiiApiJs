import { Request, Response } from "express";

export class WhatsAppWebHookController {
    constructor() {}

    async execute(req: Request, res: Response) {
        return res.json({'teste': 'chegou'})
    }
}
