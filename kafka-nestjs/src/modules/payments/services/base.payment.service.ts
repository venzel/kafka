import { Logger } from '@nestjs/common';

export abstract class BasePaymentService {
    protected readonly logger: Logger;

    constructor(className: string) {
        this.logger = new Logger(className);
    }
}
