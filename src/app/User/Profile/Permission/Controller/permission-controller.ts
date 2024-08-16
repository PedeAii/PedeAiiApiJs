import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IPermissionService } from "../Domain/Service/i-permission-service";
import { RoleIdDto } from "./dto/role-id-dto";
import { Success } from "../../../../../../Kernel/Http/Success";

@injectable()
export class PermissionController {
    constructor(
        @inject('IPermissionController') private readonly permissionService: IPermissionService
    ) { }

    async getPermissionsByRoleId(req: Request, res: Response)  {
        const { roleId } = req.body;

        const output = await this.permissionService.getPermissionsByRoleId(
            new RoleIdDto(roleId)
        );

        const success = new Success(output);

        return res.json(success.render());
    }
}
