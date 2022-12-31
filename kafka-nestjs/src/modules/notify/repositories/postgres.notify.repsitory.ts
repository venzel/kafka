import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateNotifyDto } from '../dto/create.notify.dto';
import { NotifyEntity } from '../entities/notify.entity';
import { NotifyRepository } from './notify.repository';

export class PostgresNotifyRepository implements NotifyRepository {
    constructor(
        @Inject('NOTIFY_REPOSITORY')
        private notifyRepository: Repository<NotifyEntity>,
    ) {}

    async create(createNotifyDto: CreateNotifyDto): Promise<NotifyEntity> {
        const notify = this.notifyRepository.create(createNotifyDto);

        console.log(notify);

        try {
            await this.notifyRepository.save(notify);
        } catch (error) {
            throw new Error(error);
        }

        return notify;
    }

    findAll(): Promise<NotifyEntity[] | undefined> {
        return this.notifyRepository.find();
    }
}
