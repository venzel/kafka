import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateNotifyDto } from '../../../dtos/create.notify.dto';
import { NotifyRepositoryInterface } from '../../../repositories/notify.repository.interface';
import { NotifyTypeormEntity } from '../entities/notify.typeorm.entity';

export class NotifyTypeormRepository implements NotifyRepositoryInterface {
    constructor(
        @Inject('NOTIFY_TYPEORM_REPOSITORY')
        private notifyRepository: Repository<NotifyTypeormEntity>,
    ) {}

    async create(dto: CreateNotifyDto): Promise<NotifyTypeormEntity> {
        const notify = this.notifyRepository.create(dto);

        try {
            await this.notifyRepository.save(notify);
        } catch (error) {
            throw new Error(error);
        }

        return notify;
    }

    async list(): Promise<NotifyTypeormEntity[]> {
        return await this.notifyRepository.find();
    }
}
