import { Injectable } from '@nestjs/common';
import { PaymentExternalServiceInterface } from './payment.external.service.interface';

@Injectable()
export class PicpayPaymentExternalService implements PaymentExternalServiceInterface {
    readonly baseApi: string;
    readonly token: string;

    constructor() {}

    async getTax(): Promise<number> {
        return 20;
    }
}
