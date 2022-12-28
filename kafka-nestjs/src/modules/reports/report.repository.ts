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
        private reportRepository: Model<Report>,
    ) {}

    async findOneById(id: string): Promise<Report | undefined> {
        return await this.reportRepository.findOne({ where: { id } });
    }

    async create(createReportDto: CreateReportDto): Promise<Report> {
        try {
            return await this.reportRepository.create(createReportDto);
        } catch (_) {
            throw new InternalServerErrorException(ReportsMessageEnum.INTERNAL_ERROR);
        }
    }
}
