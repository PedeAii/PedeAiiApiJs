import { HttpException } from "./HttpException";
import { HttpStatusCode } from "./HttpStatusCode";

export class Unauthorized extends HttpException implements HttpStatusCode {
    getStatusCode() : number {
        return 401;
    }
}
