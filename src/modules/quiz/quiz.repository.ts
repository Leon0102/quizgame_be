import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../utils/base.abstract';
import { QueryDto } from './dto/query.dto';
import { Quiz } from './quiz.entity';

export class QuizRepository extends BaseRepository<Quiz> {

  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {
    super();
  }

  getRepository(): Repository<Quiz> {
    return this.quizRepository;
  }

  async getQuizzes(quiz: QueryDto, categoryId: number) {
    const result = await this.getRepository()
      .createQueryBuilder('quiz')
      .take(quiz.amount)
      .leftJoinAndSelect('quiz.category', 'category')
      .where('quiz.categoryId = :categoryId', { categoryId: categoryId })
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

}
