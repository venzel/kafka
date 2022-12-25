import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from 'src/configs/winston.config';
import { LoggerInterceptor } from 'src/interceptors/logger.interceptor';
import { PaymentModule } from './payments/payment.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        WinstonModule.forRoot(winstonConfig),
        PaymentModule,
    ],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggerInterceptor,
        },
    ],
})
export class AppModule {}
