import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { mongodbProviders } from 'src/core/database/mongodb.providers';
import { reportProvider } from './report.provider';
import { ReportRepository } from './report.repository';
import { ReportsController } from './reports.controller';
import { ReportsServiceAdapter } from './reports.service.adapter';
import { CreateReportService } from './services/create.report.service';
import { FindOneReportService } from './services/findone.report.service';

@Module({
    exports: [...mongodbProviders],
    controllers: [ReportsController],
    providers: [
        ...mongodbProviders,
        ...reportProvider,
        ReportRepository,
        ReportsServiceAdapter,
        CreateReportService,
        FindOneReportService,
        ConfigService,
    ],
})
export class ReportsModule {}
