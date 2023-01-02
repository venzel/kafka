import { NotifyTypeormRepository } from '../infra/typeorm/repositories/notify.typeorm.repository';
import { NotifyInMemoryRepository } from '../repositories/notify.in.memory.repository';

export const notifyRepositoryProvider = [
    {
        provide: 'NOTIFY_TYPEORM_REPOSITORY',
        useClass: NotifyTypeormRepository,
    },
    {
        provide: 'NOTIFY_IN_MEMORY_REPOSITORY',
        useClass: NotifyInMemoryRepository,
    },
];
