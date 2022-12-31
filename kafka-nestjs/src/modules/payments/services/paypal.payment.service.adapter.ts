import { Inject, Injectable } from '@nestjs/common';
import { PaymentService } from 'src/core/services/payment/payment.service';
import { BasePaymentService } from './base.payment.service';

@Injectable()
export class PaypalPaymentServiceAdapter extends BasePaymentService {
    constructor(@Inject('PAYPAL_PAYMENT') private readonly paypalService: PaymentService) {
        super(PaypalPaymentServiceAdapter.name);
    }

    async getTax(): Promise<number> {
        return this.paypalService.getTax();
    }
}
