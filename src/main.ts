import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // AppMoudle 을 들어가보면 Class 인 걸 알 수 있다.
  await app.listen(3000);
}
bootstrap(); // bootstrap 은 단지 이름일 뿐이다.
