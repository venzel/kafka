import { Payment } from '../payment.entity';

export class ResponsePaymentDto {
  message: string;
  payment: Payment;
}
