import { Injectable } from '@nestjs/common';

@Injectable()
export class FindOnePaymentService {
  execute(id: Number) {
    return 'This action adds a new payment';
  }
}
