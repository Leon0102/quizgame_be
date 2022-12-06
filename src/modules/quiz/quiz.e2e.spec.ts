import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { QuizModule } from '.././quiz/quiz.module';
import { QuizService } from '.././quiz/quiz.service';

describe('Quiz', () => {
  let app: INestApplication;
  let quizService = { getQuizzes: () => ['test'] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [QuizModule],
    })
      .overrideProvider(QuizService)
      .useValue(quizService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET quiz`, () => {
    return request(app.getHttpServer())
      .get('/quiz')
      .expect(200)
      .expect({
        response_code: 0,
        results: quizService.getQuizzes(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
}
);
