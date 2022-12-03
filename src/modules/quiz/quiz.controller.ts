/* eslint-disable prettier/prettier */
import {
  Controller,
  Get, Query
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QueryDto } from './dto/query.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
@ApiTags('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  async getAllQuiz(@Query() query: QueryDto) {
    const rs = await this.quizService.getQuizzes(query);
    return {
      response_code: 0,
      results: rs,
    };
  }
}
