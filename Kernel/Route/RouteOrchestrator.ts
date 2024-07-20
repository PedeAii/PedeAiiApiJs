import { Router } from "express";
import { whatsAppWebHookRouter } from "../../src/app/WebHook/Route/routes"
import { messageRouter } from "../../src/app/Message/Route/routes";
import { userAuthRouter } from "src/app/User/User/Route/routes";
import { integratorRouter } from "src/app/Integrator/Route/routes";

export class RouteOrchestrator {

    private static generate(): Router[] {
        return [
            whatsAppWebHookRouter,
            messageRouter,
            userAuthRouter,
            integratorRouter
        ];
    }

    public static getInstance() {
        return this.generate();
    }
}
