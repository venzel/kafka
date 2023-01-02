import { randomUUID } from 'node:crypto';
import { NotifyEntityInterface } from './notify.entity.interface';

export class NotifyInMemoryEntity implements NotifyEntityInterface {
    readonly id: string;
    readonly message: string;

    constructor(message: string) {
        this.id = randomUUID();
        this.message = message;
    }

    static factory(message: string) {
        return new this(message);
    }
}
