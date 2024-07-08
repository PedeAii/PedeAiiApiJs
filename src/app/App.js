import express, { Router } from 'express';

export class App {
    CURRENT_STEP = 1;
    
    constructor(app = express()) {
        this._app = app
        this.current_step = this.CURRENT_STEP;
        this.message = {};
        this.cep = '';
        this.middleware();
        this.routes();
    }

    middleware() {
        this._app.use(express.json());
    }
    
    routes() {
        const route = new Router();
        this._app.use(route.get("/", (req, res) => {
            return res.json({ok: true});
        }));
    }
}
    