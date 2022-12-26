import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/providers/database.providers';
import { PaymentController } from './payments.controller';
import { paymentProviders } from './payment.providers';
import { PaymentRepository } from './payment.repository';
import { PaymentsServiceAdapter } from './payments.service.adapter';
import { CreatePaymentService } from './services/create.payment.service';
import { FindOnePaymentService } from './services/findone.payment.service';
import { UpdatePaymentService } from './services/update.payment.service';

@Module({
    controllers: [PaymentController],
    exports: [...databaseProviders],
    providers: [
        ...databaseProviders,
        ...paymentProviders,
        PaymentRepository,
        PaymentsServiceAdapter,
        CreatePaymentService,
        UpdatePaymentService,
        FindOnePaymentService,
    ],
})
export class PaymentModule {}
