import { Injectable, Logger, UnprocessableEntityException } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create.payment.dto';
import { ResponsePaymentDto } from '../dto/response.payment.dto';
import { PaymentMessagesEnum } from '../payment.messages.enum';
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
            throw new UnprocessableEntityException(PaymentMessagesEnum.UNPROCESSABLE_ENTITY);
        }

        return {
            message: PaymentMessagesEnum.CREATED,
            payment: paymentCreated,
        };
    }
}
