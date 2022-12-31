import { Module } from '@nestjs/common';
import { datasourceProviders } from 'src/core/providers/datasource.providers';
import { NotifyController } from './notify.controller';
import { NotifyServiceAdapter } from './notify.service.adapter';
import { CreateNotifyService, FindNotifyService } from './notify.services.barrel';
import { notifyDatasourceProvider } from './providers/notify.datasource.provider';
import { notifyRepositoryProvider } from './providers/notify.repository.provider';

@Module({
    controllers: [NotifyController],
    exports: [...datasourceProviders],
    providers: [
        ...datasourceProviders,
        ...notifyDatasourceProvider,
        ...notifyRepositoryProvider,
        NotifyServiceAdapter,
        CreateNotifyService,
        FindNotifyService,
    ],
})
export class NotifyModule {}
