"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.integratorRouter = void 0;
const express_1 = require("express");
const integrator_controller_1 = require("../Controller/integrator-controller");
const integratorRouter = (0, express_1.Router)();
exports.integratorRouter = integratorRouter;
const integratorController = new integrator_controller_1.IntegratorController();
integratorRouter.post('/integrator/auth', integratorController.authAction);
//# sourceMappingURL=routes.js.map