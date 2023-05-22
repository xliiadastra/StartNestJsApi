// import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// export class UpdateMovieDto { // 사람들이 movie를 만들기 위해서 필요한 것들을 나열한다. entities/movie.entity.ts 를 참고해야 한다.

//     @IsString()
//     readonly title?: string;
// /*
//     '?'가 붙음으로서 title 속성은 선택적(optional)이 된다.
//     즉, 값이 주어지지 않을 수도 있으며 update 할 때 title의 값을 변경할 수도 있고 그대로 유지할 수 있다.
// */
    
//     @IsNumber()
//     readonly year?: number;

//     @IsString({ each: true })
//     readonly genres?: string[];
//     /*
//         genres는 배열이기 때문에 배열의 각 요소에 대해 개별적인 유효성 검사를 
//         수행하도록 each: true 옵션을 준다.
//         즉, genres 배열의 모든 요소가 문자열이어야 한다는 요구사항을 나타내기 위해 사용한다. 
//     */
// }

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
/* * PartialType : 부분 유형, extend : 연장, 확장하다
    PartialType 은 위의 CreateMovieDto의 조건들을 optional 하게 만들어준다.
*/