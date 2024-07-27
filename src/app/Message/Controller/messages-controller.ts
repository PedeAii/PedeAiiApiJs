import { Request, Response } from "express";
import { TextMessagesRepository } from "../Infrastructure/Repositories/TextMessagesRepository";

export class MessageController {
    constructor() { }

    async create(req: Request, res: Response) {
        const messageEntity = new TextMessagesRepository();
        const { message } = req.body;

        try {

            const messageCreated = await messageEntity.create({
                message
            });

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