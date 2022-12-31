import { DataSource } from 'typeorm';
import { PostgresNotifyEntity } from '../infra/typeorm/entities/postgres.notify.entity';

export const notifyDatasourceProvider = [
    {
        provide: 'NOTIFY_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(PostgresNotifyEntity),
        inject: ['POSTGRES_CONNECTION'],
    },
];
