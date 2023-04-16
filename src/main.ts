import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //defino uma lista = DTO
      forbidNonWhitelisted: true, //recusa algo fora do white list
      transform: true, //transforma os dados de acordo com o DTO
    })
  )
  await app.listen(process.env.PORT ||3000);
}
bootstrap();
