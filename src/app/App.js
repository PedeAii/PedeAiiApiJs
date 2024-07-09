import express, { Router } from 'express';
import { router } from './router/index.js';
import 'dotenv/config.js';


export class App {
    constructor(app = express(), route = new Router()) {
        this._route = route;
        this._app = app;
        this.middleware();
        this.routes();
    }

    middleware() {
        this._app.use(express.json());
    }

    routes() {;
        this._app.use(this._route.use(router));
    }
}
