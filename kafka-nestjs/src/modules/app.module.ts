import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { LoggerInterceptor } from 'src/core/interceptors/logger.interceptor';
import { baseConfig, winstonConfig } from '../core/configs';
import { PaymentModule } from './payments/payments.module';
import { ReportsModule } from './reports/reports.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, load: [baseConfig] }),
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
