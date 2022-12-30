import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create.payment.dto';
import { ResponsePaymentDto } from '../dto/response.payment.dto';
import { PaymentRepository } from '../payment.repository';
import { PaymentsMessageEnum } from '../payments.message.enum';
import { PaymentService } from './payment.service';

@Injectable()
export class CreatePaymentService extends PaymentService {
    constructor(private readonly paymentRepository: PaymentRepository) {
        super();
    }

    async execute(createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        const paymentCreated = await this.paymentRepository.create(createPaymentDto);

        if (!paymentCreated) {
            throw new UnprocessableEntityException(PaymentsMessageEnum.UNPROCESSABLE_ENTITY);
        }

        this.logger.log(PaymentsMessageEnum.CREATED);

        return {
            message: PaymentsMessageEnum.CREATED,
            payment: paymentCreated,
        };
    }
}
