/* eslint-disable prettier/prettier */

import { IsNotEmpty } from 'class-validator';
import { Difficulty, Type } from '../quiz.entity';

export class CreateQuizDTO {
  @IsNotEmpty()
  difficulty: Difficulty;

  @IsNotEmpty()
  type: Type;

  @IsNotEmpty()
  question: string;

  @IsNotEmpty()
  correct_answer: string;

  @IsNotEmpty()
  incorrect_answers: string[];
}
