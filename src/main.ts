import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv'
import { logger } from './shared/middleware/logger.middleware';
dotenv.config({ path: './server.env' })

function isProduction(): boolean {
  return process.env.MODE === 'PROD'
}


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("/api")
  app.useGlobalPipes(new ValidationPipe())

  if (!isProduction()) {
    const config = new DocumentBuilder()
      .setTitle('Shopping REST')
      .setVersion('1.0')
      .addBearerAuth()
      .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api', app, document)
  }

  app.use(logger)
  await app.listen(process.env.PORT);
}
bootstrap();