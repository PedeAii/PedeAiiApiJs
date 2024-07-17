import { Router } from "express";
import { whatsAppWebHookRouter } from "../../src/app/WebHook/Route/routes"
import { messageRouter } from "../../src/app/Message/Route/routes";

export class RouteOrchestrator {

    private static generate(): Router[] {
        return [
            whatsAppWebHookRouter,
            messageRouter
        ];
    }

    public static getInstance() {
        return this.generate();
    }
}
