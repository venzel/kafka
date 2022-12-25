import { Module } from '@nestjs/common';
import { typeormProviders } from 'src/providers/typeorm.provider';
import { PaymentController } from './payment.controller';
import { paymentProviders } from './payment.providers';
import { PaymentRepository } from './payment.repository';
import { PaymentServiceAdapter } from './payment.service.adapter';
import { CreatePaymentService } from './services/create.payment.service';
import { FindOnePaymentService } from './services/findone.payment.service';
import { UpdatePaymentService } from './services/update.payment.service';

@Module({
    controllers: [PaymentController],
    exports: [...typeormProviders],
    providers: [
        ...typeormProviders,
        ...paymentProviders,
        PaymentRepository,
        PaymentServiceAdapter,
        CreatePaymentService,
        UpdatePaymentService,
        FindOnePaymentService,
    ],
})
export class PaymentModule {}
