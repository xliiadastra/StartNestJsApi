import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({ // 데코레이터라고 불리는 함수. 이것을 쓰는 데에 익숙해져야 한다. 왜냐면 클래스에 함수 기능을 추가할 수 있기 때문이다.
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
