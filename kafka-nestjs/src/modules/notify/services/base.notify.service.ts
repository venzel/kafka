import { Inject, Logger } from '@nestjs/common';
import { NotifyRepositoryInterface } from '../repositories/notify.repository.interface';

export abstract class NotifyService {
    protected readonly logger: Logger;

    @Inject('NOTIFY_TYPEORM_REPOSITORY')
    protected readonly notifyRepository: NotifyRepositoryInterface;

    constructor(className: string) {
        this.logger = new Logger(className);
    }
}
