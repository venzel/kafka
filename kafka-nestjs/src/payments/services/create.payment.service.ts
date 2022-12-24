import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create.payment.dto';

@Injectable()
export class CreatePaymentService {
  execute(createPaymentDto: CreatePaymentDto) {
    return 'This action adds a new payment';
  }
}
