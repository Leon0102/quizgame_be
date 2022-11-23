import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from '../category/category.module';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Module({
  controllers: [],
  imports: [TypeOrmModule.forFeature([Quiz]), CategoryModule],
  providers: [QuizService],
})
export class QuizModule {}
