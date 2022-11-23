import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryService } from '../category/category.service';
import { CreateQuizDTO } from './dto/create-quiz.dto';
import { QueryDto } from './dto/query.dto';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,

    private readonly categoryService: CategoryService,
  ) {}
  async getQuizzes(quiz: QueryDto) {
    const category = await this.categoryService.getCategoryByName(
      quiz.category,
    );

    const result = await this.quizRepository
      .createQueryBuilder('quiz')
      .take(quiz.amount)
      .leftJoinAndSelect('quiz.category', 'category')
      .where('quiz.categoryId = :categoryId', { categoryId: category.id })
      .andWhere('quiz.difficulty = :difficulty', {
        difficulty: quiz.difficulty,
      })
      .andWhere('quiz.type = :type', { type: quiz.type })
      .getMany();
    const quizzes = result.map((quiz) => {
      return {
        category: quiz.category.name,
        type: quiz.type,
        difficulty: quiz.difficulty,
        question: quiz.question,
        correct_answer: quiz.correct_answer,
        incorrect_answers: quiz.incorrect_answers,
      };
    });
    return quizzes;
  }

  async createQuiz(quiz: CreateQuizDTO) {
    return await this.quizRepository.save(quiz);
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: {
        id,
      },
    });
  }
}
