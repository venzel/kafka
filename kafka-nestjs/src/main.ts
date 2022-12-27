import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './core/configs/winston.config';
import { AppModule } from './modules/app.module';

async function bootstrap() {
    const logger = WinstonModule.createLogger(winstonConfig);

    const app = await NestFactory.create(AppModule, { logger });

    app.enableCors();

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            transformOptions: {
                enableImplicitConversion: true,
            },
        }),
    );

    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

    await app.listen(process.env.PORT_API);
}
bootstrap();
