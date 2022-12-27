import { HttpService } from '@nestjs/axios';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { ResponsePaymentDto } from '../dto/response.payment.dto';
import { PaymentRepository } from '../payment.repository';
import { PaymentsMessageEnum } from '../payments.message.enum';

@Injectable()
export class FindOnePaymentService {
    private readonly logger: Logger;

    constructor(
        private readonly httpService: HttpService,
        private readonly paymentRepository: PaymentRepository,
    ) {
        this.logger = new Logger(FindOnePaymentService.name);
    }

    async execute(id: string): Promise<ResponsePaymentDto | undefined> {
        const { data } = await firstValueFrom(
            this.httpService.get<any>('https://api.coindesk.com/v1/bpi/currentprice.json').pipe(
                catchError((error: any) => {
                    this.logger.error(error.response.data);

                    throw new Error('An error happenedx!');
                }),
            ),
        );

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
