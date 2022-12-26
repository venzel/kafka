import { Injectable, Logger, UnprocessableEntityException } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create.payment.dto';
import { ResponsePaymentDto } from '../dto/response.payment.dto';
import { PaymentsMessageEnum } from '../payments.message.enum';
import { PaymentRepository } from '../payment.repository';

@Injectable()
export class CreatePaymentService {
    private readonly logger: Logger;

    constructor(private readonly paymentRepository: PaymentRepository) {
        this.logger = new Logger(CreatePaymentService.name);
    }

    async execute(createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        const paymentCreated = await this.paymentRepository.create(createPaymentDto);

        if (!paymentCreated) {
            throw new UnprocessableEntityException(PaymentsMessageEnum.UNPROCESSABLE_ENTITY);
        }

        return {
            message: PaymentsMessageEnum.CREATED,
            payment: paymentCreated,
        };
    }
}
