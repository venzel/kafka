import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create.payment.dto';
import { UpdatePaymentDto } from './dto/update.payment.dto';
import { PaymentServiceAdapter } from './services/payment.service.adapter';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentServiceAdapter) {}

  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(id, updatePaymentDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(id);
  }
}
