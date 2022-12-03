import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from '../category/category.module';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([Quiz]), CategoryModule],
  providers: [QuizService, QuizRepository],
})
export class QuizModule {}
