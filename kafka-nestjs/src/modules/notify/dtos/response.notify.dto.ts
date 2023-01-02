export class ResponseNotifyDto {
    id: string;
    message: string;

    constructor(id: string, message: string) {
        this.id = id;
        this.message = message;
    }

    static factory(id: string, message: string): ResponseNotifyDto {
        return new this(id, message);
    }
}
