import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({ // 데코레이터라고 불리는 함수. 이것을 쓰는 데에 익숙해져야 한다. 왜냐면 클래스에 함수 기능을 추가할 수 있기 때문이다.
  imports: [],
  controllers: [MoviesController], // 컨트롤러는 url을 가져오고 함수를 실행시킨다. express의 라우터 같은 존재.
  providers: [MoviesService],
})
export class AppModule {}
