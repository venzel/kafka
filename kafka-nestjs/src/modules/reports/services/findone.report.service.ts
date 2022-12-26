import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ResponseReportDto } from '../dto/response.report.dto';
import { ReportRepository } from '../report.repository';
import { ReportsMessageEnum } from '../reports.message.enum';

@Injectable()
export class FindOneReportService {
    private readonly logger: Logger;

    constructor(private readonly reportRepository: ReportRepository) {
        this.logger = new Logger(FindOneReportService.name);
    }

    async execute(id: string): Promise<ResponseReportDto | undefined> {
        const existsReport = await this.reportRepository.findOneById(id);

        if (!existsReport) {
            throw new NotFoundException(ReportsMessageEnum.NOT_FOUND);
        }

        return {
            message: ReportsMessageEnum.SHOWED,
            report: existsReport,
        };
    }
}
