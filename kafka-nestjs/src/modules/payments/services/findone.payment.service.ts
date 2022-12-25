import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ResponsePaymentDto } from '../dto/response.payment.dto';
import { PaymentRepository } from '../payment.repository';
import { PaymentMessagesEnum } from './../payment.messages.enum';

@Injectable()
export class FindOnePaymentService {
    private readonly logger: Logger;

    constructor(private readonly paymentRepository: PaymentRepository) {
        this.logger = new Logger(FindOnePaymentService.name);
    }

    async execute(id: string): Promise<ResponsePaymentDto | undefined> {
        const existsPayment = await this.paymentRepository.findOneById(id);

        if (!existsPayment) {
            throw new NotFoundException(PaymentMessagesEnum.NOT_FOUND);
        }

        return {
            message: PaymentMessagesEnum.SHOWED,
            payment: existsPayment,
        };
    }
}
