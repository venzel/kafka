import { Injectable, Logger, UnprocessableEntityException } from '@nestjs/common';
import { CreateReportDto } from '../dto/create.report.dto';
import { ResponseReportDto } from '../dto/response.report.dto';
import { ReportRepository } from '../report.repository';
import { ReportsMessageEnum } from '../reports.message.enum';

@Injectable()
export class CreateReportService {
    private readonly logger: Logger;

    constructor(private readonly reportRepository: ReportRepository) {
        this.logger = new Logger(CreateReportService.name);
    }

    async execute(createReportDto: CreateReportDto): Promise<ResponseReportDto> {
        const reportCreated = await this.reportRepository.create(createReportDto);

        if (!reportCreated) {
            throw new UnprocessableEntityException(ReportsMessageEnum.UNPROCESSABLE_ENTITY);
        }

        this.logger.log(ReportsMessageEnum.CREATED);

        return ResponseReportDto.factory(ReportsMessageEnum.SHOWED, reportCreated);
    }
}
