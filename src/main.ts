import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { truncateSync } from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // AppMoudle 을 들어가보면 Class 인 걸 알 수 있다.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // decorator 가 없는 것들은 검사조차 하지 않는다.
      forbidNonWhitelisted: true, // 누군가 이상한 걸 보내면, 리퀘스트 자체를 막을 수 있다.
      transform: true, // 클라이언트가 요청을 보낸 것을 우리가 원하는 실제 타입으로 변환시켜준다.
    }),
  ); // ValidationPipe는 유효성검사를 하게 도와준다.
  await app.listen(3000);
}
bootstrap(); // bootstrap 은 단지 이름일 뿐이다.
