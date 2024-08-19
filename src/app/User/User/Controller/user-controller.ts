import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { UserAuthDto } from "./dto/user-auth-dto";
import { IUserAuthService } from "../Domain/Service/i-user-auth-service";
import { Success } from "../../../../../Kernel/Http/Success";

@injectable()
export class UserController {
    constructor(
        @inject('IUserAuthService') private readonly userAuthService: IUserAuthService
    ) { }

    async execute(req: Request, res: Response) {
        const { email, password } = req.body;

        const output = await this.userAuthService.auth(
            new UserAuthDto(email, password)
        );

        const success = new Success(output.jsonSerialize());

        return res.json(success.render());
    }
}
