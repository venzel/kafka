import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { datasourceProviders } from 'src/core/providers/datasource.providers';
import { paymentProviders } from './payment.providers';
import { PaymentRepository } from './payment.repository';
import { PaymentController } from './payments.controller';
import { PaymentsServiceAdapter } from './payments.service.adapter';
import { CreatePaymentService } from './services/create.payment.service';
import { FindOnePaymentService } from './services/findone.payment.service';
import { UpdatePaymentService } from './services/update.payment.service';

@Module({
    controllers: [PaymentController],
    imports: [HttpModule],
    exports: [...datasourceProviders],
    providers: [
        ...datasourceProviders,
        ...paymentProviders,
        PaymentRepository,
        PaymentsServiceAdapter,
        CreatePaymentService,
        UpdatePaymentService,
        FindOnePaymentService,
    ],
})
export class PaymentModule {}
