import { Request, Response } from "express";
import { IMessageService } from "../Domain/Services/i-message-service";
import { inject, injectable } from "inversify";
import { TextMessagesRepository } from "../Infrastructure/Repositories/text-messages-repository";

@injectable()
export class MessageController {
    constructor(
        @inject('IMessageService') private readonly messageService: IMessageService
    ) { }

    async create(req: Request, res: Response) {
        const { message } = req.body;

        try {
            const messageCreated = await this.messageService.create(message);

            return res.status(201).json({
                'message': messageCreated
            })
        } catch (error: any) {
            console.log(error.message);
            return res.json({
                'message': error.message
            })
        }
    }
}
