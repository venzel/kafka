import { Inject, Logger } from '@nestjs/common';
import { NotifyRepository } from '../repositories/notify.repository';

export abstract class NotifyService {
    protected readonly logger: Logger;

    @Inject('POSTGRES_NOTIFY_REPOSITORY')
    protected readonly notifyRepository: NotifyRepository;

    constructor(className: string) {
        this.logger = new Logger(className);
    }
}
