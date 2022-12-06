import { Test, TestingModule } from '@nestjs/testing';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';

describe('QuizService', () => {
  let service: QuizService;
  let repository: QuizRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizService,
        {
          provide: QuizRepository,
          useValue: {
            getQuizzes: jest.fn(),
          },
        },
      ],
    }).compile();
    service = module.get<QuizService>(QuizService);
    repository = module.get<QuizRepository>(QuizRepository);
  });

  describe('getQuizzes', () => {
    it('should have a quiz in database', () => {
      const queryDto = {
        amount: 1,
        categoryId: 25,
        difficulty: 'easy',
        type: 'multiple',
      };
      const quiz = {
        category: 'Entertainment: Video Games',
        type: 'multiple',
        difficulty: 'easy',
        question: 'Quiz 1',
        correct_answer: 'Quiz 1',
        incorrect_answers: ['Quiz 2', 'Quiz 3', 'Quiz 4'],
      };
      jest.spyOn(repository, 'getQuizzes').mockResolvedValue([quiz]);
      expect(service.getQuizzes(queryDto)).resolves.toEqual([quiz]);
    });
  });
});
