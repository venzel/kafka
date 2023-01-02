import { DataSource } from 'typeorm';
import { NotifyTypeormEntity } from '../infra/typeorm/entities/notify.typeorm.entity';

export const notifyDatasourceProvider = [
    {
        provide: 'NOTIFY_REPOSITORY',
        useFactory: (dataSource: DataSource) => {
            return dataSource.getRepository(NotifyTypeormEntity);
        },
        inject: ['POSTGRES_CONNECTION'],
    },
];
