import { HttpException } from "./HttpException";
import { HttpStatusCode } from "./HttpStatusCode";

export class UnprocessableEntity extends HttpException implements HttpStatusCode {
    getStatusCode() : number {
        return 422;
    }
}
