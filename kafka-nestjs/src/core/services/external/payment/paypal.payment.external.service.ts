import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaymentExternalServiceInterface } from './payment.external.service.interface';

@Injectable()
export class PaypalPaymentExternalService implements PaymentExternalServiceInterface {
    private readonly baseUrl: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.baseUrl = this.configService.get<string>('PAYPAL_BASE_URL');
    }

    async getTax(): Promise<number> {
        const data = await this.httpService.axiosRef.get(
            'https://api.coindesk.com/v1/bpi/currentprice.json',
        );

        console.log(data);

        return 10;
    }
}
