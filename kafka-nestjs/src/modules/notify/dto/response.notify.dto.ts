import { NotifyEntity } from '../entities/notify.entity';

export class ResponseNotifyDto {
    message: string;
    data: NotifyEntity;

    constructor(message: string, notifyEntify: NotifyEntity) {
        this.message = message;
        this.data = notifyEntify;
    }

    static factory(message: string, notifyEntify: NotifyEntity) {
        return new this(message, notifyEntify);
    }
}
