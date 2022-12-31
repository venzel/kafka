import { Inject, Injectable } from '@nestjs/common';
import { PaymentService } from '../../../core/services/payment/payment.service';
import { BasePaymentService } from './base.payment.service';

@Injectable()
export class PicpayPaymentServiceAdapter extends BasePaymentService {
    constructor(@Inject('PICPAY_PAYMENT') private readonly picpayService: PaymentService) {
        super(PicpayPaymentServiceAdapter.name);
    }

    async getTax(): Promise<number> {
        return this.picpayService.getTax();
    }
}
