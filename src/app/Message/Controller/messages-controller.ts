import { Request, Response } from "express";
import { IMessageService } from "../Domain/Services/IMessageService";

export class MessageController {
    constructor(private readonly messageService: IMessageService) { }

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