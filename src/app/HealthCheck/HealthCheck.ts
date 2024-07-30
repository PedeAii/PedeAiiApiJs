import { Router } from "express";

const healthCheckRouter = Router();

healthCheckRouter.get('/health', (req, res) => res.status(200).send({ ok: true }))

export { healthCheckRouter }