import { DataSource } from 'typeorm';
import { PostgresNotifyEntity } from './entities/postgres.notify.entity';
import { PostgresNotifyRepository } from './repositories/postgres.notify.repsitory';

export const notifyProvider = [
    {
        provide: 'NOTIFY_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(PostgresNotifyEntity),
        inject: ['POSTGRES_CONNECTION'],
    },
];
