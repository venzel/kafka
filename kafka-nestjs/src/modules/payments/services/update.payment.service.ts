import { Injectable, NotFoundException } from '@nestjs/common';
import { ResponsePaymentDto } from '../dto/response.payment.dto';
import { UpdatePaymentDto } from '../dto/update.payment.dto';
import { PaymentRepository } from '../payment.repository';
import { PaymentsMessageEnum } from '../payments.message.enum';
import { PaymentService } from './payment.service';

@Injectable()
export class UpdatePaymentService extends PaymentService {
    constructor(private readonly paymentRepository: PaymentRepository) {
        super();
    }

    async execute(id: string, updatePaymentDto: UpdatePaymentDto): Promise<ResponsePaymentDto> {
        const existsPayment = await this.paymentRepository.findOneById(id);

        if (!existsPayment) {
            throw new NotFoundException(PaymentsMessageEnum.NOT_FOUND);
        }

        Object.assign(existsPayment, updatePaymentDto);

        const paymentSaved = await this.paymentRepository.save(existsPayment);

        return {
            message: PaymentsMessageEnum.UPDATED,
            payment: paymentSaved,
        };
    }
}
