import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/movies', () => {
    it('/ (GET)', () => {
      return request(app.getHttpServer()) // getHttpServer 는 https://localhost:3000 같은 걸 입력 안해도 되게 만드는 함수?
        .get('/')
        .expect(200)
        .expect('Welcome to my Movie Api');
    });
    it("Post", () => {
      return request(app.getHttpServer())
        .post("/movies")
        .send({
          title: "Test",
          year: 2000,
          genres: ["test"],
        })
        .expect(201);
    });
    it('DELETE', () => {
      return request(app.getHttpServer())
        .delete('/movies')
        .expect(404);
    });
  });
});
