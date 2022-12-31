import {
    PaypalPaymentService,
    PicpayPaymentService,
} from 'src/core/services/payment.service.barrel';

export const paymentProvider = [
    {
        provide: 'PAYPAL_PAYMENT',
        useClass: PaypalPaymentService,
    },
    {
        provide: 'PICPAY_PAYMENT',
        useClass: PicpayPaymentService,
    },
];
