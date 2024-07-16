import { Request, Response } from "express";
import { HttpException } from "Kernel/http/HttpException";
import { parse, StackFrame } from "stack-trace";

export default class Trace {
    public static stackTrace(error: Error): StackFrame[] {
        return parse(error);
    }

    public static managerError(error: any, req: Request, res: Response): Response {
        const trace = Trace.stackTrace(error);
        
        if (error instanceof HttpException) {
            const response = error.render();
            response.trace = trace
            return res.status(error.getStatusCode()).json(response)
        }

        return res.status(500).json({ error: 'Internal Server Error' });
    };
}
