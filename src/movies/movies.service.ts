import { Injectable } from '@nestjs/common';
import { parse } from 'path';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = []; // 가짜 데이터베이스를 만드는 방법. 진짜 데이터베이스는 PostSQL 같은건가보다.

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string): Movie {
        return this.movies.find(movie => movie.id === parseInt(id)); // parseInt(id) 를 +id 로 바꿔도 된다.
    }

    deleteOne(id: string): boolean {
        this.movies.filter(movie => movie.id !== +id);
        return true;
    }

    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }
}
