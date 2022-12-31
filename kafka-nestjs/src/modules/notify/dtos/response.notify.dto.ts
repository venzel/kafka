import { NotifyEntity } from '../entities/notify.entity';

export class ResponseNotifyDto {
    id: string;
    message: string;

    constructor(id: string, message: string) {
        this.id = id;
        this.message = message;
    }

    static factory(id: string, message: string) {
        return new this(id, message);
    }

    static parse(notifyEntify: NotifyEntity) {
        const { id, message } = notifyEntify;

        return new this(id, message);
    }

    static parseAll(notifies: NotifyEntity[]) {
        return notifies.map((notify) => new this(notify.id, notify.message));
    }
}
