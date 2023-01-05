import { Connection } from 'mongoose';
import { ReportSchema } from './infra/mongoose/schemas/report.schema';

export const reportProvider = [
    {
        provide: 'REPORT_MODEL',
        useFactory: (connection: Connection) => connection.model('Report', ReportSchema),
        inject: ['MONGOOSE_CONNECTION'],
    },
];
