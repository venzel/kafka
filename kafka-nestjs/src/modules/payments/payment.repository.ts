import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/create.payment.dto';
import { Payment } from './payment.entity';
import { PaymentsMessageEnum } from './payments.message.enum';

@Injectable()
export class PaymentRepository {
    constructor(
        @Inject('PAYMENT_REPOSITORY')
        private paymentRepository: Repository<Payment>,
    ) {}

    async findOneById(id: string): Promise<Payment | undefined> {
        return await this.paymentRepository.findOne({ where: { id } });
    }

    async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
        const payment = this.paymentRepository.create(createPaymentDto);

        try {
            await this.paymentRepository.save(payment);

            return payment;
        } catch (_) {
            throw new InternalServerErrorException(PaymentsMessageEnum.INTERNAL_ERROR);
        }
    }

    async save(payment: Payment): Promise<Payment> {
        return await this.paymentRepository.save(payment);
    }
}
