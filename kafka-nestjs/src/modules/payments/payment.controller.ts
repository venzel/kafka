import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create.payment.dto';
import { ResponsePaymentDto } from './dto/response.payment.dto';
import { UpdatePaymentDto } from './dto/update.payment.dto';
import { PaymentServiceAdapter } from './payment.service.adapter';

@Controller('payments')
export class PaymentController {
    constructor(private readonly paymentService: PaymentServiceAdapter) {}

    @Post()
    async create(@Body() createPaymentDto: CreatePaymentDto): Promise<ResponsePaymentDto> {
        return await this.paymentService.create(createPaymentDto);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updatePaymentDto: UpdatePaymentDto,
    ): Promise<ResponsePaymentDto> {
        return await this.paymentService.update(id, updatePaymentDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ResponsePaymentDto> {
        return await this.paymentService.findOne(id);
    }
}
