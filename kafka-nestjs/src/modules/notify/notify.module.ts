import { Module } from '@nestjs/common';
import { datasourceProviders } from 'src/core/database/datasource.providers';
import { DataSource } from 'typeorm';
import { NotifyController } from './infra/controllers/notify.controller';
import { NotifyTypeormEntity } from './infra/typeorm/entities/notify.typeorm.entity';
import { NotifyTypeormRepository } from './infra/typeorm/repositories/notify.typeorm.repository';
import { NotifyServiceAdapter } from './services/notify.service.adapter';
import { CreateNotifyService, FindNotifyService } from './services/notify.services.barrel';

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
