/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateQuizDTO } from './dto/create-quiz.dto';
import { QueryDto } from './dto/query.dto';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Controller('quiz')
@ApiTags('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizdata: CreateQuizDTO) {
    return this.quizService.createQuiz(quizdata);
  }

  @Get()
  async getAllQuiz(@Query() query: QueryDto) {
    const rs = await this.quizService.getQuizzes(query);
    return {
      response_code: 0,
      results: rs,
    };
  }

  @Get('/:id')
  getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return this.quizService.getQuizById(id);
  }
}
