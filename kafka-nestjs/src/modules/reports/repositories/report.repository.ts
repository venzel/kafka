import { CreateReportDto } from './../dto/create.report.dto';
import { Report } from '../models/report.model';

export interface ReportRepository {
    findOneById(id: string): Promise<Report | undefined>;

    create(createReportDto: CreateReportDto): Promise<Report>;
}
