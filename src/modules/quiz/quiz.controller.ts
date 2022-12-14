/* eslint-disable prettier/prettier */
import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import CATEGORY from '../../constants/enum';
import { QueryDto } from './dto/query.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
@ApiTags('quiz')
export class QuizController {
  constructor(
    private readonly quizService: QuizService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Get()
  async getAllQuiz(@Query() query: QueryDto) {
    this.logger.log(
      'info',
      `${query.amount}|${CATEGORY[query.categoryId]}|${query.difficulty}|${query.type
      }`,
    );
    const rs = await this.quizService.getQuizzes(query);
    return {
      response_code: 0,
      results: rs,
    };
  }
}
