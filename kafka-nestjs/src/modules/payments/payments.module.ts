import { Module } from '@nestjs/common';
import {
    PaypalPaymentService,
    PicpayPaymentService,
} from '../../core/services/payment.service.barrel';
import { PaypalPaymentController, PicpayPaymentController } from './payment.controllers.barrel';
import {
    PaypalPaymentServiceAdapter,
    PicpayPaymentServiceAdapter,
} from './payment.services.barrel';
import { httpPicpayProvider, httpProvider } from './providers/http.provider';
import { paymentProvider } from './providers/payment.provider';

@Module({
    imports: [httpProvider, httpPicpayProvider],
    controllers: [PaypalPaymentController, PicpayPaymentController],
    providers: [
        ...paymentProvider,
        PaypalPaymentService,
        PicpayPaymentService,
        PaypalPaymentServiceAdapter,
        PicpayPaymentServiceAdapter,
    ],
})
export class PaymentsModule {}
