import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // 이것도 데코레이터. HTTP GET 요청을 처처리리하하는 endpoint 로 동작하도록 설정하는 역할을 한다.
  getHello(): string {
    return this.appService.getHello();
    /*
      바로 위의 AppService 를 뜻하고 컨트롤러는 단지 url 만 참조할 뿐이고
      나머지 비지니스 로직은 appService 에서 움직인다.
    */
  }

  @Get('/astra')
  sayHello(): string {
    return this.appService.getHi();
  }
  @Get('/astra42')
  say42Hello(): string {
    return this.appService.getHi();
  }
}
