import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => { // test 하기 전에 실행되는 부분.
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    // service.create({ // 여기에 create 해버리면 테스트 전에 실행되는 부분이라 무비 1개가 있는 상태에서부터 각 테스트가 실행된다.
    //   title: 'Test Movie',
    //   genres: ['test'],
    //   year: 2000,
    // });
  });

  // afterAll(() => { 기본적으로 afterAll()은 데이터 베이스를 깨끗하게 정리해주는(모두 지우는) function 을 넣어서 사용한다.});
  // beforeEach(), afterEach(), beforeAll() 등 많은 Hook 이 있다.

  it('should be defined', () => { // 여기서 it 은 individual test(개별 테스트)의 줄임말로 생각해도 된다.
    expect(service).toBeDefined();
  });

  // it("should be 4", () => {
  //   expect(2 + 3).toEqual(5);
  // });

  describe("getAll", () =>{
    it("should return an array", () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array); // 위의 getAll() 리턴을 result 에 저장시키고 result가 Array 인스턴스인 지 테스트하는 코드임.
    });
  });

  describe("getOne", () =>{
    it("should return a movie", () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined(); // movie 에 정상적으로 return 되어 defined 되어 있는 지 확인하는 테스트인 듯?
      expect(movie.id).toEqual(1); // expect 안의 값이 toEqual() 안의 값과 같은 지 확인하는 테스트.
    });
    it("should throw 404 error", () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    })
  });

  describe("deleteOne", () => {
    it("deletes a movie", () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      console.log(service.getAll());
      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;

      expect(afterDelete).toBeLessThan(beforeDelete); // afterDelete를 통해 getAll 에서 받아온 movice 의 갯수가 줄었는 지 확인하는 테스트.
    });
    it("should return a 404", () => {
      try {
        service.deleteOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });

  describe("create", () => {
    it("should create a movie", () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const AfterCreate = service.getAll().length;
      console.log(beforeCreate, AfterCreate);
      expect(AfterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe("update", () => {
    it("should be update a movie", () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const beforeMovie = service.getOne(1);
      service.update(1, {
        title: 'Updated Test',
      });
      const afterMovie = service.getOne(1);
      expect(afterMovie.title).toEqual('Updated Test');
    });
    it("should throw a 404 error", () => {
      try {
        service.update(999, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });
});

/*
  describe : 말하다, 묘사하다. (여기에서는 테스트를 묘사하는 의미를 뜻 함)
  should be defined : 정의되어 있어야 함.
  expect : 기대하다.
  to be less then : 보다 적어야 합니다, 보다 적게
  to be greater than : 보다 더 큰
*/
