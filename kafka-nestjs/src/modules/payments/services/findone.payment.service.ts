import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ResponsePaymentDto } from '../dto/response.payment.dto';
import { PaymentRepository } from '../payment.repository';
import { PaymentsMessageEnum } from '../payments.message.enum';

@Injectable()
export class FindOnePaymentService {
    private readonly logger: Logger;

    constructor(private readonly paymentRepository: PaymentRepository) {
        this.logger = new Logger(FindOnePaymentService.name);
    }

    async execute(id: string): Promise<ResponsePaymentDto | undefined> {
        const existsPayment = await this.paymentRepository.findOneById(id);

        if (!existsPayment) {
            throw new NotFoundException(PaymentsMessageEnum.NOT_FOUND);
        }

        return {
            message: PaymentsMessageEnum.SHOWED,
            payment: existsPayment,
        };
    }
}
