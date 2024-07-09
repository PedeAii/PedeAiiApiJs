import * as expressType from "express";
import { AuthUserService } from "../../Services/AuthUserService/index.js";

class AuthUserController {
  /**
   * @description Authenticate a user
   * @param {expressType.Request} req
   * @param {expressType.Response} res
   * @param {expressType.NextFunction} next
   */
  async execute(req, res, next) {
    const { email, password } = req.body;
    const user = await new AuthUserService().execute(email, password);

    if (!user) {
      return res.status(401).json({ error: "User or password invalid" });
    }

    next();
  }
}

export default new AuthUserController();
