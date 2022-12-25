import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { port } from './configs/api.config';
import { winstonConfig } from './configs/winston.config';
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

    await app.listen(port);
}
bootstrap();
