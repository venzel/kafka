import { Injectable } from '@nestjs/common';
import { UpdatePaymentDto } from '../dto/update.payment.dto';

@Injectable()
export class UpdatePaymentService {
  execute(id: Number, updatePaymentDto: UpdatePaymentDto) {
    return 'This action adds a new payment';
  }
}
