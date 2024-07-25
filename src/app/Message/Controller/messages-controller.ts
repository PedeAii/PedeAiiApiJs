import { Request, Response } from "express";
import { IMessageService } from "../Domain/Services/IMessageService";
import { inject } from "tsyringe";

export class MessageController {
    constructor(
        private readonly messageService: IMessageService
    ) { }

    async create(req: Request, res: Response) {
        const { message } = req.body;

        try {
            //const messageCreated = await this.messageService.create(message);
            console.log(this.messageService);
            return res.status(201).json({
                'message': 'messageCreated'
            })
        } catch (error: any) {
            console.log(error.message);
            return res.json({
                'message': error.message
            })
        }
    }
}