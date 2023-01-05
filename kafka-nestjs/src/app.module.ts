import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { LoggerInterceptor } from 'src/core/interceptors/logger.interceptor';
import { baseConfig, winstonConfig, paypalConfig } from './core/configs/configs.barrel';
import { VariablesService } from './core/services/internal/variables.service';
import { NotifyModule } from './modules/notify/notify.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ReportsModule } from './modules/reports/reports.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, load: [baseConfig, paypalConfig] }),
        WinstonModule.forRoot(winstonConfig),
        NotifyModule,
        PaymentsModule,
        ReportsModule,
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
