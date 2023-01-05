import { Logger } from '@nestjs/common';

export abstract class PaymentServiceBase {
    protected readonly logger: Logger;

    constructor(className?: string) {
        this.logger = new Logger(className ?? PaymentServiceBase.name);
    }
}
