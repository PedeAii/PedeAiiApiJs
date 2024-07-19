import { Request, Response, Router } from "express";
import { RouteOrchestrator } from "./Route/RouteOrchestrator";
import { HttpException } from "./Http/HttpException";
import dotenv from 'dotenv';
import Trace from "./Errors/Trace";


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
