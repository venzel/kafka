import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/providers/database.providers';
import { reportProviders } from './report.providers';
import { ReportRepository } from './report.repository';
import { ReportsController } from './reports.controller';
import { ReportsServiceAdapter } from './reports.service.adapter';
import { CreateReportService } from './services/create.report.service';
import { FindOneReportService } from './services/findone.report.service';

@Module({
    exports: [...databaseProviders],
    controllers: [ReportsController],
    providers: [
        ...databaseProviders,
        ...reportProviders,
        ReportRepository,
        ReportsServiceAdapter,
        CreateReportService,
        FindOneReportService,
    ],
})
export class ReportsModule {}
