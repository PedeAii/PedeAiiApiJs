import { Request, Response } from "express";
import { HttpException } from "../Http/HttpException";
import { StackFrame } from "stack-trace";

export default class Trace {
    public static async stackTrace(error: Error): Promise<StackFrame[]> {
        const { parse } = await import('stack-trace');
        return parse(error);
    }

    public static async managerError(error: Error, req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
        const trace = Trace.stackTrace(error);
        
        if (error instanceof HttpException) {
            const response = error.render();
            response.trace = await trace
            return res.status(error.getStatusCode()).json(response)
        }

        return res.status(500).json({
            error: 'Internal Server Error',
            trace: error.stack
        });
    };
}
