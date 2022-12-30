import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ResponsePaymentDto } from '../dto/response.payment.dto';
import { PaymentRepository } from '../payment.repository';
import { PaymentsMessageEnum } from '../payments.message.enum';
import { PaymentService } from './payment.service';

@Injectable()
export class FindOnePaymentService extends PaymentService {
    constructor(
        private readonly httpService: HttpService,
        private readonly paymentRepository: PaymentRepository,
    ) {
        super();
    }

    async execute(id: string): Promise<ResponsePaymentDto | undefined> {
        const data = await this.httpService.axiosRef.get(
            'https://api.coindesk.com/v1/bpi/currentprice.json',
        );

        // const { data } = await firstValueFrom(
        //     this.httpService.get<any>('https://api.coindesk.com/v1/bpi/currentprice.json').pipe(
        //         catchError((error: any) => {
        //             this.logger.error(error.response.data);

        //             throw new Error('An error happenedx!');
        //         }),
        //     ),
        // );

        this.logger.log(data);

        const existsPayment = await this.paymentRepository.findOneById(id);

        if (!existsPayment) {
            throw new NotFoundException(PaymentsMessageEnum.NOT_FOUND);
        }

        return {
            message: PaymentsMessageEnum.SHOWED,
            payment: existsPayment,
        };
    }
}
