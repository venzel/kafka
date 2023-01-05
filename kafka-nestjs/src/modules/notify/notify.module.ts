import { Module } from '@nestjs/common';
import { datasourceProviders } from 'src/core/database/datasource.providers';
import { DataSource } from 'typeorm';
import { NotifyTypeormEntity } from './infra/typeorm/entities/notify.typeorm.entity';
import { NotifyTypeormRepository } from './infra/typeorm/repositories/notify.typeorm.repository';
import { NotifyController } from './notify.controller';
import { NotifyServiceAdapter } from './services/notify.service.adapter';
import { CreateNotifyService, FindNotifyService } from './services/notify.services.barrel';
import { NotifyInMemoryRepository } from './repositories/notify.in.memory.repository';

@Module({
    controllers: [NotifyController],
    exports: [...datasourceProviders],
    providers: [
        ...datasourceProviders,
        {
            provide: 'NOTIFY_TYPEORM_REPOSITORY',
            useFactory: (dataSource: DataSource) => dataSource.getRepository(NotifyTypeormEntity),
            inject: ['TYPEORM_CONNECTION'],
        },
        {
            provide: 'NOTIFY_REPOSITORY',
            useClass: NotifyTypeormRepository,
        },
        NotifyServiceAdapter,
        CreateNotifyService,
        FindNotifyService,
    ],
})
export class NotifyModule {}
