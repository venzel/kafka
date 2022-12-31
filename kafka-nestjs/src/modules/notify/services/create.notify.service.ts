import { CreateNotifyDto } from './../dto/create.notify.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ResponseNotifyDto } from '../dto/response.notify.dto';
import { NotifyRepository } from '../repositories/notify.repository';

@Injectable()
export class CreateNotifyService {
    constructor(
        @Inject('POSTGRES_NOTIFY_REPOSITORY') private readonly notifyRepository: NotifyRepository,
    ) {}

    async execute(createNotifyDto: CreateNotifyDto): Promise<ResponseNotifyDto> {
        const notify = await this.notifyRepository.create(createNotifyDto);

        return ResponseNotifyDto.factory('Notify Created!', notify);
    }
}
