import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create.report.dto';
import { CreateReportService } from './services/create.report.service';
import { FindOneReportService } from './services/findone.report.service';

@Injectable()
export class ReportsServiceAdapter {
    constructor(
        private readonly createReportService: CreateReportService,
        private readonly findOneReportService: FindOneReportService,
    ) {}

    create(createReportDto: CreateReportDto) {
        return this.createReportService.execute(createReportDto);
    }

    findOne(id: string) {
        return this.findOneReportService.execute(id);
    }
}
