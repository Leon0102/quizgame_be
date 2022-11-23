import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';

export enum Type {
  MULTIPLE = 'multiple',
  BOOLEAN = 'boolean',
}

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

@Entity({ name: 'quiz' })
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: Difficulty })
  difficulty: string;

  @Column({ enum: Type })
  type: string;

  @Column()
  question: string;

  @Column()
  correct_answer: string;

  @Column({
    type: 'text',
    array: true,
  })
  incorrect_answers: string[];

  @ManyToOne(() => Category, (category) => category.quiz)
  category: Category;
}
