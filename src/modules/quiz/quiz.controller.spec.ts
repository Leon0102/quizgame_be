import { Test, TestingModule } from '@nestjs/testing';
import { ModuleMocker } from 'jest-mock';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

const moduleMocker = new ModuleMocker(global);

describe('QuizController', () => {
  let controller: QuizController;
  let service: QuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizController],
      providers: [QuizService],
    }).compile();

    controller = module.get<QuizController>(QuizController);
    service = module.get<QuizService>(QuizService);
  });

  describe('getAllQuiz', () => {
    it('should return an array of quiz', () => {
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
      jest.spyOn(service, 'getQuizzes').mockResolvedValue([quiz]);
      expect(controller.getAllQuiz(queryDto)).resolves.toEqual({
        response_code: 0,
        results: [quiz],
      });
    });
  });
}
);
