import { NotifyEntity } from '../entities/notify.entity';

export abstract class NotifyRepository {
    abstract findAll(): Promise<NotifyEntity[] | undefined> | string;
}
