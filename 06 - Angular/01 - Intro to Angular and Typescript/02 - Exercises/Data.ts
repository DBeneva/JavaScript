class Request {
    method: string;
    uri: string;
    version: string;
    message: string;
    response: string | undefined;
    fulfilled: boolean;

    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}