import { Inject, Logger } from '@nestjs/common';
import { NotifyRepositoryInterface } from '../repositories/notify.repository.interface';

export abstract class BaseNotifyService {
    protected readonly logger: Logger;

    constructor(
        @Inject('NOTIFY_REPOSITORY')
        protected readonly notifyRepository: NotifyRepositoryInterface,
    ) {
        this.logger = new Logger(BaseNotifyService.name);
    }
}
