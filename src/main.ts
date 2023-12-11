import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {
  CorsConfig,
  NestConfig,
  SwaggerConfig,
} from './common/configs/config.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');
  const corsConfig = configService.get<CorsConfig>('cors');

  if (swaggerConfig.enabled) {
    const options = new DocumentBuilder()
      .setTitle(swaggerConfig.title)
      .setDescription(swaggerConfig.description)
      .setVersion(swaggerConfig.version)
      .addTag(swaggerConfig.tags)
      .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(swaggerConfig.path, app, document);
  }

  if (corsConfig.enabled) {
    app.enableCors();
  }

  await app.listen(nestConfig.port);
}
bootstrap();
