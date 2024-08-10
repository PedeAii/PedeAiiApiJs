import { NextFunction, Request, Response } from "express";

export class UserAuthController {

  async execute(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    //const user = await new AuthUserService().execute(email, password);

    // if (!user) {
      // return res.status(401).json({ error: "User or password invalid" });
    // }
// teste welliton dia 10/08/2024 //
    next();
  }
}
