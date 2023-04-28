import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SuccessInterceptor } from './common/interceptors/success.interceptor';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            forbidNonWhitelisted: true,
        }),
    );

    app.useGlobalInterceptors(new SuccessInterceptor());

    app.enableCors({
        origin: true,
        methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
        credentials: true,
    });

    await app.listen(Number(process.env.MAIN_PORT));
}

bootstrap()
    .then(() => {
        Logger.log(`Application runnin on port ${process.env.MAIN_PORT}`);
    })
    .catch((error) => {
        throw new BadRequestException(error.response);
    });
