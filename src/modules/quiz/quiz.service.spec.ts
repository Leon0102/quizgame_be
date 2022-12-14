import { Test, TestingModule } from '@nestjs/testing';
import { QuizService } from './quiz.service';

describe('QuizService', () => {
  let service: QuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuizService,
        {
          provide: QuizService,
          useValue: {},
        },
      ],
    }).compile();
    service = module.get<QuizService>(QuizService);
  });

  describe('getQuizzes', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });
});
