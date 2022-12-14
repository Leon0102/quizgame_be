import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as Sentry from '@sentry/node';
import rateLimit from 'express-rate-limit';
import { AppModule } from './app.module';
import { SentryInterceptor } from './interceptors/sentry.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalInterceptors(new SentryInterceptor());
  Sentry.init({
    dsn: 'https://a22e4fedbcb940b7a009b44d2398db30@o4504270118322176.ingest.sentry.io/4504270165311488',

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

  Sentry.startTransaction({
    op: 'quizgame',
    name: 'My Quiz Game Transaction',
  });

  const config = new DocumentBuilder()
    .setTitle('A Simple Quiz Web App')
    .setDescription('The API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(4000);

  console.info(`🚀 Server running on: http://localhost:4000/api`);
}
bootstrap();
