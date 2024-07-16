export class HttpSuccess {
    constructor (private readonly body: Object) {
        this.body = body;
    }

    public render() : { 
        success: boolean, 
        error: boolean, 
        response: any 
    } {
        const body = {
            success: true,
            error: false,
            response: this.body
        };
    
        return body;
    }
}
