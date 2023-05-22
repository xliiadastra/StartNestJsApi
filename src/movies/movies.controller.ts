import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // 이 부분이 url의 Entry Point를 컨트롤 하기 때문에 리소스 취급을 받는 듯 하다.
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    // @Get('search') // NestJs는 라우팅 처리 순서때문에 정의된 순서대로 우선순위를 가지기 때문에 가장 위에 정의된 라우트 핸들러가 먼저 매칭되고 실행된다.
    // search(@Query('year') seachingYear: string) { // @Query의 매개변수는 URL의 '?' 뒤에 오는 key=value 형태의 매개변수를 의미한다.
    //     return `We are searching for a movie made after: ${seachingYear}`;
    // }

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get('/:id') // 이 안에 있는 id 와 Param 의 id 의 이름은 같아야 한다.
    getOne(@Param("id") movieId: number): Movie {
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    /*
        ': Movie' 는 getOne() 이라는 메서드의 반환값인데 HTTP 응답에 사용되는 값이다.
        반환값을 사용하여 클라이언트에게 영화 정보를 포함한 HTTP 응답을 전송할 수 있으며 반환값은 다양한 형태를 가질 수 있다.
        반환값이 void 일 때도 있는데 이 때는 클라이언트에게 별도의 응답을 보내지 않고 작업을 처리하는 경우에 사용된다.
        예를 들어, 데이터의 삭제 작업을 수행하는 remove() 메서드는 반환값이 없을 수 있다.
    */
    }

    @Post() // 생성.
    create(@Body() movieData: CreateMovieDto) { // movieData는 CreateMovieDto 라는 타입을 가진다는 의미이다.
        console.log(movieData); // 콘솔에다가 log 같이 Body(json)로 받은 movieData 매개변수에 저장된 데이터를 출력한다.
        return this.moviesService.create(movieData); // 여기서 받은 데이터를 그대로 리턴하게 되면 웹사이트에서 내가 입력된 데이터가 그대로 보여진다.
    }

    @Delete('/:id')
    remove(@Param("id") movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    // @Put() // 모든 리소스를 업데이트한다.

    @Patch('/:id') // 리소스의 일부분만 업데이트한다.
    patch(@Param("id") movieId: number, @Body() updateData: UpdateMovieDto) {
        // return {
        //     updateMovie: movieId,
        //     ...updateData, // '...' 은 전개 연산자(spread operator)로, 객체를 확장하거나 배열을 병합하는데 사용된다.
        // }
        return this.moviesService.update(movieId, updateData);
    }
}
