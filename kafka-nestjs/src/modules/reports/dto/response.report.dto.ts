import { Report } from '../models/report.model';

export class ResponseReportDto {
    message: string;
    report: Report;

    constructor(message: string, report: Report) {
        this.message = message;
        this.report = report;
    }

    static factory(message: string, report: Report) {
        return new this(message, report);
    }
}
