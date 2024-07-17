import { StackFrame } from "stack-trace";

export class HttpException extends Error {
    getStatusCode(): number {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly errors: string[]) {
        super(errors.join(", "));
        this.errors = errors;
    }

    public render() : { 
        success: boolean,
        error: boolean,
        message: string, 
        errorDetail: string[]
        trace: StackFrame[] | null
    } {        
        const body = {
            success: false,
            error: true,
            message: this.message,
            errorDetail: this.errors,
            trace: null
        };
    
        return body;
    }
}
