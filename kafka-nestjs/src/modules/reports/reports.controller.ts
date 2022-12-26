import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateReportDto } from './dto/create.report.dto';
import { ResponseReportDto } from './dto/response.report.dto';
import { ReportsServiceAdapter } from './reports.service.adapter';

@Controller('reports')
export class ReportsController {
    constructor(private readonly reportsService: ReportsServiceAdapter) {}

    @Post()
    async create(@Body() createReportDto: CreateReportDto): Promise<ResponseReportDto> {
        return await this.reportsService.create(createReportDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ResponseReportDto> {
        return await this.reportsService.findOne(id);
    }
}
