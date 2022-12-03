import { Injectable } from '@nestjs/common';
import { CategoryService } from '../category/category.service';
import { QueryDto } from './dto/query.dto';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    private readonly quizRepository: QuizRepository,

    private readonly categoryService: CategoryService,
  ) {}
  async getQuizzes(quiz: QueryDto) {
    return await this.quizRepository.getQuizzes(quiz, quiz.categoryId);
  }
}
