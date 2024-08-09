import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { UserAuthService } from "../Domain/Service/user-auth-service";
import { UserAuthDto } from "./dto/user-auth-dto";

@injectable()
export class UserController {
	constructor(
		@inject('IUserAuthService') private readonly userAuthService: UserAuthService
	) {}

  	async execute( req: Request, res: Response ) {
		const { email, password } = req.body;

		const output = await this.userAuthService.auth(
			new UserAuthDto (email, password)
		);
  	}
}
