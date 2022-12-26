import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create.payment.dto';
import { UpdatePaymentDto } from './dto/update.payment.dto';
import { CreatePaymentService } from './services/create.payment.service';
import { FindOnePaymentService } from './services/findone.payment.service';
import { UpdatePaymentService } from './services/update.payment.service';

@Injectable()
export class PaymentsServiceAdapter {
    constructor(
        private readonly createPaymentService: CreatePaymentService,
        private readonly updatePaymentService: UpdatePaymentService,
        private readonly findOnePaymentService: FindOnePaymentService,
    ) {}

    create(createPaymentDto: CreatePaymentDto) {
        return this.createPaymentService.execute(createPaymentDto);
    }

    update(id: string, updatePaymentDto: UpdatePaymentDto) {
        return this.updatePaymentService.execute(id, updatePaymentDto);
    }

    findOne(id: string) {
        return this.findOnePaymentService.execute(id);
    }
}
