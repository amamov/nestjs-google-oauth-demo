import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      secret: 'secret!!',
      resave: false,
      saveUninitialized: false,
    }),
  );
  await app.listen(5000);
}
bootstrap();
