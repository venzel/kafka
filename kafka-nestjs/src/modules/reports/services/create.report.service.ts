import { Injectable, Logger, UnprocessableEntityException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateReportDto } from '../dto/create.report.dto';
import { ResponseReportDto } from '../dto/response.report.dto';
import { ReportRepository } from '../report.repository';
import { ReportsMessageEnum } from '../reports.message.enum';

@Injectable()
export class CreateReportService {
    private readonly logger: Logger;

    constructor(
        private readonly reportRepository: ReportRepository,
        private readonly configService: ConfigService,
    ) {
        this.logger = new Logger(CreateReportService.name);
    }

    async execute(createReportDto: CreateReportDto): Promise<ResponseReportDto> {
        const emailAdmin = this.configService.get<string>('POSTGRES_DB_NAME');

        this.logger.log(emailAdmin);

        const reportCreated = await this.reportRepository.create(createReportDto);

        if (!reportCreated) {
            throw new UnprocessableEntityException(ReportsMessageEnum.UNPROCESSABLE_ENTITY);
        }

        this.logger.log(ReportsMessageEnum.CREATED);

        return ResponseReportDto.factory(ReportsMessageEnum.SHOWED, reportCreated);
    }
}
