import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { LoggerInterceptor } from 'src/core/interceptors/logger.interceptor';
import { baseConfig, winstonConfig } from './core/configs';
import { VariablesService } from './core/services/variables.service';
import { NotifyModule } from './modules/notify/notify.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, load: [baseConfig] }),
        WinstonModule.forRoot(winstonConfig),
        NotifyModule,
        // PaymentModule,
        // ReportsModule,
    ],
    providers: [
        VariablesService,
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggerInterceptor,
        },
    ],
})
export class AppModule {}
