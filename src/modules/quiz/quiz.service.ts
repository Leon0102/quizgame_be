import { Injectable } from '@nestjs/common';
import { QueryDto } from './dto/query.dto';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(private readonly quizRepository: QuizRepository) {}
  async getQuizzes(quiz: QueryDto) {
    return await this.quizRepository.getQuizzes(quiz, quiz.categoryId);
  }
}
