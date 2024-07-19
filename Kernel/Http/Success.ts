import { HttpStatusCode } from "./HttpStatusCode";
import { HttpSuccess } from "./HttpSuccess";

export class Success extends HttpSuccess implements HttpStatusCode {
    getStatusCode(): number {
        return 200;
    }
}
