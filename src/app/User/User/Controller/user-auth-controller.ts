import { NextFunction, Request, Response } from "express";

export class UserAuthController {

  async execute(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    //const user = await new AuthUserService().execute(email, password);

    // if (!user) {
      // return res.status(401).json({ error: "User or password invalid" });
    // }

    next();
  }
}