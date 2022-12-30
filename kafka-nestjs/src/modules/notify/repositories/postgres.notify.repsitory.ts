import { NotifyEntity } from '../entities/notify.entity';
import { NotifyRepository } from './notify.repository';

export class PostgresNotifyRepository implements NotifyRepository {
    findAll(): Promise<NotifyEntity[] | undefined> | string {
        return 'REPOSITORIO NOTIFY OK';
    }
}
