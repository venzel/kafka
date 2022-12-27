import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from 'src/core/configs/winston.config';
import { LoggerInterceptor } from 'src/core/interceptors/logger.interceptor';
import configuration from '../core/configs/api.config';
import { PaymentModule } from './payments/payments.module';
import { ReportsModule } from './reports/reports.module';

@Module({
    imports: [
        ConfigModule.forRoot({ load: [configuration] }),
        WinstonModule.forRoot(winstonConfig),
        PaymentModule,
        ReportsModule,
    ],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggerInterceptor,
        },
    ],
})
export class AppModule {}