import { Request, Response, Router } from "express";
import { RouteOrchestrator } from "./Route/RouteOrchestrator";
import { parse } from 'stack-trace';
import { HttpException } from "./http/HttpException";
import dotenv from 'dotenv';


export class Kernel {

    private routeOrchestrator: RouteOrchestrator;

    private routes: Router[] = [];

    constructor() {
        this.routeOrchestrator = new RouteOrchestrator();
    }

    public run(): void {
        this.routes = this.routeOrchestrator.generate()
        dotenv.config();
    }

    public getRoutes(): Router[] {
        return this.routes;
    }

    public managerError(error: any, req: Request, res: Response): Response {
        const trace = parse(error);
        
        if (error instanceof HttpException) {
            const response = error.render();
            response.trace = trace
            return res.status(error.getStatusCode()).json(response)
        }

        return res.status(500).json({ error: 'Internal Server Error' });
    };
}
