import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies') // 이 부분이 url의 Entry Point를 컨트롤 하기 때문에 리소스 취급을 받는 듯 하다.
export class MoviesController {

    @Get()
    getAll(){
        return 'This will return all movies';
    }

    @Get('/:id') // 이 안에 있는 id 와 Param 의 id 의 이름은 같아야 한다.
    getOne(@Param("id") movieId: string){
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post() // 생성.
    create() {
        return "This will create a movie";
    }

    @Delete('/:id')
    remove(@Param("id") movieId: string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

//    @Put() // 모든 리소스를 업데이트한다.
    @Patch('/:id') // 리소스의 일부분만 업데이트한다.
    patch(@Param("id") movieId: string) {
        return `This will delete a movie with the id: ${movieId}`;
    }
}
