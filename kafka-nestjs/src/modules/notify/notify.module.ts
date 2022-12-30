import { Module } from '@nestjs/common';
import { NotifyServiceAdapter } from './notify.service.adapter';
import { NotifyController } from './notify.controller';
import { NotifyRepository } from './repositories/notify.repository';
import { PostgresNotifyRepository } from './repositories/postgres.notify.repsitory';
import { CreateNotifyService } from './services/create.notify.service';

@Module({
    controllers: [NotifyController],
    providers: [
        NotifyServiceAdapter,
        {
            provide: NotifyRepository,
            useClass: PostgresNotifyRepository,
        },
        CreateNotifyService,
    ],
})
export class NotifyModule {}
