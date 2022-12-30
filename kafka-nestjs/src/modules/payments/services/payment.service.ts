import { Logger } from '@nestjs/common';

export abstract class PaymentService {
    protected readonly logger: Logger = new Logger(PaymentService.name);
}
