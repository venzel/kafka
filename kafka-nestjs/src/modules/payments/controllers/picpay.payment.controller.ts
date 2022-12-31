import { Controller, Get } from '@nestjs/common';
import { PicpayPaymentServiceAdapter } from '../payment.services.barrel';

@Controller('payments/picpay')
export class PicpayPaymentController {
    constructor(private readonly paymentsService: PicpayPaymentServiceAdapter) {}

    @Get('/tax')
    async getTax(): Promise<number> {
        return await this.paymentsService.getTax();
    }
}
