import { Injectable, NotFoundException } from '@nestjs/common';
import { parse } from 'path';
import { Movie } from './entities/movie.entity';

@Injectable() // injection
export class MoviesService {
    private movies: Movie[] = []; // 가짜 데이터베이스를 만드는 방법. 진짜 데이터베이스는 PostSQL 같은건가보다.

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string): Movie {
        const movie = this.movies.find(movie => movie.id === parseInt(id)); // parseInt(id) 를 +id 로 바꿔도 된다.
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
    }

    deleteOne(id: string) {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== +id);
    } // '.filter'는 true로 반환된 녀석들만 모아서 새로운 배열을 반환한다.

    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }

    update(id: string, updateData) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData});
    }
}
