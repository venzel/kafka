import { Controller, Get } from '@nestjs/common';
import { PaypalPaymentServiceAdapter } from '../services/payment.services.barrel';

@Controller('payments/paypal')
export class PaypalPaymentController {
    constructor(private readonly paymentsService: PaypalPaymentServiceAdapter) {}

    @Get('/tax')
    async getTax(): Promise<number> {
        return await this.paymentsService.getTax();
    }
}
