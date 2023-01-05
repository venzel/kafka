import { Inject, Injectable } from '@nestjs/common';
import { PaymentExternalServiceInterface } from '../../../core/services/external/payment/payment.external.service.interface';
import { PaymentServiceBase } from './payment.service.base';

@Injectable()
export class PicpayPaymentServiceAdapter extends PaymentServiceBase {
    constructor(
        @Inject('PICPAY_PAYMENT') private readonly picpayService: PaymentExternalServiceInterface,
    ) {
        super(PicpayPaymentServiceAdapter.name);
    }

    async getTax(): Promise<number> {
        return this.picpayService.getTax();
    }
}
