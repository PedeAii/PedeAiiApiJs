import { Router } from "express";
import { whatsAppWebHookRouter } from "../../src/app/WebHook/Route/routes"

export class RouteOrchestrator {

    public generate(): Router[] {
        return [
            whatsAppWebHookRouter
        ];
    }
}
