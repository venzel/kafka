import { Module } from '@nestjs/common';
import {
    PaypalPaymentExternalService,
    PicpayPaymentExternalService,
} from '../../core/services/external/payment/payment.external.service.barrel';
import {
    PaypalPaymentController,
    PicpayPaymentController,
} from './infra/controllers/payment.controllers.barrel';
import {
    PaypalPaymentServiceAdapter,
    PicpayPaymentServiceAdapter,
} from './services/payment.services.barrel';

@Module({
    imports: [],
    controllers: [PaypalPaymentController, PicpayPaymentController],
    providers: [
        PaypalPaymentExternalService,
        PicpayPaymentExternalService,
        PaypalPaymentServiceAdapter,
        PicpayPaymentServiceAdapter,
    ],
})
export class PaymentsModule {}
