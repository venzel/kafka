import { Inject, Injectable } from '@nestjs/common';
import { PaymentExternalServiceInterface } from 'src/core/services/external/payment/payment.external.service.interface';
import { PaymentServiceBase } from './payment.service.base';

@Injectable()
export class PaypalPaymentServiceAdapter extends PaymentServiceBase {
    constructor(
        @Inject('PAYPAL_PAYMENT') private readonly paypalService: PaymentExternalServiceInterface,
    ) {
        super(PaypalPaymentServiceAdapter.name);
    }

    async getTax(): Promise<number> {
        return this.paypalService.getTax();
    }
}
