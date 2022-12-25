import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UpdatePaymentDto } from '../dto/update.payment.dto';
import { PaymentMessagesEnum } from '../payment.messages.enum';
import { PaymentRepository } from '../payment.repository';
import { ResponsePaymentDto } from './../dto/response.payment.dto';

@Injectable()
export class UpdatePaymentService {
    private readonly logger: Logger;

    constructor(private readonly paymentRepository: PaymentRepository) {
        this.logger = new Logger(UpdatePaymentService.name);
    }

    async execute(id: string, updatePaymentDto: UpdatePaymentDto): Promise<ResponsePaymentDto> {
        const existsPayment = await this.paymentRepository.findOneById(id);

        if (!existsPayment) {
            throw new NotFoundException(PaymentMessagesEnum.NOT_FOUND);
        }

        Object.assign(existsPayment, updatePaymentDto);

        const paymentSaved = await this.paymentRepository.save(existsPayment);

        return {
            message: PaymentMessagesEnum.UPDATED,
            payment: paymentSaved,
        };
    }
}
