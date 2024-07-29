import { Router } from "express";
import { RouteOrchestrator } from "./Route/RouteOrchestrator";
import dotenv from 'dotenv';


export class Kernel {

    private routes: Router[] = [];

    public run(): void {
        this.routes = RouteOrchestrator.getInstance();
        dotenv.config();
    }

    public getRoutes(): Router[] {
        return this.routes;
    }
}
