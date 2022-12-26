import { Inject, Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { Model } from 'mongoose';
import { CreateReportDto } from './dto/create.report.dto';
import { Report } from './report.model';
import { ReportsMessageEnum } from './reports.message.enum';

@Injectable()
export class ReportRepository {
    constructor(
        @Inject('REPORT_MODEL')
        private reportModel: Model<Report>,
    ) {}

    async findOneById(id: string): Promise<Report | undefined> {
        return await this.reportModel.findOne({ where: { id } });
    }

    async create(createReportDto: CreateReportDto): Promise<Report> {
        try {
            return await this.reportModel.create(createReportDto);
        } catch (_) {
            throw new InternalServerErrorException(ReportsMessageEnum.INTERNAL_ERROR);
        }
    }
}
