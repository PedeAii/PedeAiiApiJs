import { Router } from "express";
import { IntegratorController } from "../Controller/integrator-controller";

const integratorRouter = Router();

const integratorController = new IntegratorController();

integratorRouter.post('/integrator/auth', integratorController.authAction);

export { integratorRouter };
