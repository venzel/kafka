import { CreateNotifyDto } from '../dtos/create.notify.dto';
import { ResponseNotifyDto } from '../dtos/response.notify.dto';

export interface NotifyRepositoryInterface {
    create(createNotifyDto: CreateNotifyDto): Promise<ResponseNotifyDto>;

    list(): Promise<ResponseNotifyDto[]>;
}
