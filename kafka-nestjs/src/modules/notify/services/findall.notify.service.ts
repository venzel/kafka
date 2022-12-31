import { Inject, Injectable } from '@nestjs/common';
import { NotifyRepository } from '../repositories/notify.repository';

@Injectable()
export class FindAllNotifyService {
    constructor(
        @Inject('POSTGRES_NOTIFY_REPOSITORY') private readonly notifyRepository: NotifyRepository,
    ) {}

    execute() {
        return this.notifyRepository.findAll();
    }
}
