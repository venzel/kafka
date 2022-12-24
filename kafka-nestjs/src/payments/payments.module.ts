import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentServiceAdapter } from './services/payment.service.adapter';
import { CreatePaymentService } from './services/create.payment.service';
import { FindOnePaymentService } from './services/findone.payment.service';
import { UpdatePaymentService } from './services/update.payment.service';

@Module({
  controllers: [PaymentsController],
  providers: [
    PaymentServiceAdapter,
    CreatePaymentService,
    UpdatePaymentService,
    FindOnePaymentService,
  ],
})
export class PaymentsModule {}
