"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../Controller/user-controller");
const Container_1 = require("../../../../../Kernel/Container/Container");
const userController = Container_1.container.get(user_controller_1.UserController);
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post('/api/user/auth', async (req, res) => userController.execute(req, res));
//# sourceMappingURL=routes.js.map