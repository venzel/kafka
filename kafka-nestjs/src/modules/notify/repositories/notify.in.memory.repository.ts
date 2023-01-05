import { NotifyInMemoryEntity } from '../entities/notify.in.memory.entity';
import { CreateNotifyDto, ResponseNotifyDto } from '../dtos/notify.dtos.barrel';
import { NotifyMapper } from './../mappers/notify.mapper';
import { NotifyRepositoryInterface } from './notify.repository.interface';

export class NotifyInMemoryRepository implements NotifyRepositoryInterface {
    private readonly notifyRepository: NotifyInMemoryEntity[];

    constructor() {
        this.notifyRepository = [];
    }

    async create(dto: CreateNotifyDto): Promise<ResponseNotifyDto> {
        const notify = NotifyInMemoryEntity.factory(dto.message);

        this.notifyRepository.push(notify);

        return NotifyMapper.toDto(notify);
    }

    async list(): Promise<ResponseNotifyDto[]> {
        return NotifyMapper.toListDto(this.notifyRepository);
    }
}
