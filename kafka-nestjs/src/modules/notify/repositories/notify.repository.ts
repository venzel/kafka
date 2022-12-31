import { CreateNotifyDto } from '../dtos/create.notify.dto';
import { ResponseNotifyDto } from '../dtos/response.notify.dto';

export interface NotifyRepository {
    create(createNotifyDto: CreateNotifyDto): Promise<ResponseNotifyDto>;

    findAll(): Promise<ResponseNotifyDto[]>;
}
