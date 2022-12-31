import { CreateNotifyDto } from '../dto/create.notify.dto';
import { NotifyEntity } from '../entities/notify.entity';

export interface NotifyRepository {
    findAll(): Promise<NotifyEntity[] | undefined>;

    create(createNotifyDto: CreateNotifyDto): Promise<NotifyEntity>;
}
