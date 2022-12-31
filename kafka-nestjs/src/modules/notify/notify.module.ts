import { Module } from '@nestjs/common';
import { datasourceProviders } from 'src/core/providers/datasource.providers';
import { NotifyController } from './notify.controller';
import { notifyProvider } from './notify.provider';
import { NotifyServiceAdapter } from './notify.service.adapter';
import { PostgresNotifyRepository } from './repositories/postgres.notify.repsitory';
import { CreateNotifyService } from './services/create.notify.service';
import { FindAllNotifyService } from './services/findall.notify.service';

@Module({
    controllers: [NotifyController],
    exports: [...datasourceProviders],
    providers: [
        ...datasourceProviders,
        ...notifyProvider,
        {
            provide: 'POSTGRES_NOTIFY_REPOSITORY',
            useClass: PostgresNotifyRepository,
        },
        NotifyServiceAdapter,
        CreateNotifyService,
        FindAllNotifyService,
    ],
})
export class NotifyModule {}
