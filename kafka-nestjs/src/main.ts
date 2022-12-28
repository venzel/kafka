import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './core/configs/winston.config';
import { AppModule } from './app.module';
import { baseConfig } from './core/configs';

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

    const { API_PORT } = baseConfig();

    await app.listen(API_PORT);

    logger.log(`Server listen in port ${API_PORT}!`);
}
bootstrap();
