import { HttpException } from "./HttpException";
import { HttpStatusCode } from "./HttpStatusCode";

export class NotFound extends HttpException implements HttpStatusCode {
    getStatusCode() : number {
        return 404;
    }
}
