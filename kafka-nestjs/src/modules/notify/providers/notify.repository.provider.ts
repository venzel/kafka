import { PostgresNotifyRepository } from '../infra/typeorm/repositories/postgres.notify.repository';

export const notifyRepositoryProvider = [
    {
        provide: 'POSTGRES_NOTIFY_REPOSITORY',
        useClass: PostgresNotifyRepository,
    },
];
