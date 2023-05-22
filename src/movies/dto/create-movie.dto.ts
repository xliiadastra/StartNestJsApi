import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto { // 사람들이 movie를 만들기 위해서 필요한 것들을 나열한다. entities/movie.entity.ts 를 참고해야 한다.

    @IsString()
    readonly title: string;
    
    @IsNumber()
    readonly year: number;

    @IsOptional() // optioanl 하게 만들어주는 데코레이터. 즉 create 할 때 장르를 주지 않아도 된다.
    @IsString({ each: true })
    readonly genres: string[];
    /*
        genres는 배열이기 때문에 배열의 각 요소에 대해 개별적인 유효성 검사를 
        수행하도록 each: true 옵션을 준다.
        즉, genres 배열의 모든 요소가 문자열이어야 한다는 요구사항을 나타내기 위해 사용한다. 
    */
}