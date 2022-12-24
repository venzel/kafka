import { Body, Get, Injectable, Param } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create.payment.dto';
import { UpdatePaymentDto } from '../dto/update.payment.dto';
import { CreatePaymentService } from './create.payment.service';
import { FindOnePaymentService } from './findone.payment.service';
import { UpdatePaymentService } from './update.payment.service';

@Injectable()
export class PaymentServiceAdapter {
  constructor(
    private readonly createPaymentService: CreatePaymentService,
    private readonly updatePaymentService: UpdatePaymentService,
    private readonly getPaymentService: FindOnePaymentService,
  ) {}

  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.createPaymentService.execute(createPaymentDto);
  }

  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.updatePaymentService.execute(+id, updatePaymentDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getPaymentService.execute(+id);
  }
}
