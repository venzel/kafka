import { PaymentService } from './payment.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PicpayPaymentService implements PaymentService {
    readonly baseApi: string;
    readonly token: string;

    constructor() {}

    async getTax(): Promise<number> {
        return 20;
    }
}
