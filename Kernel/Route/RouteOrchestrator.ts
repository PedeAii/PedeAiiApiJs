import { Router } from "express";
import { whatsAppWebHookRouter } from "../../src/app/WebHook/Route/routes"

export class RouteOrchestrator {

    private static generate(): Router[] {
        return [
            whatsAppWebHookRouter
        ];
    }

    public static getInstance() {
        return this.generate();
    }
}
