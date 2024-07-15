import express, { Router, Application } from 'express';
import { router } from './router';
import 'dotenv/config.js';

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api/', router);
  }
}

export default new App().app;
