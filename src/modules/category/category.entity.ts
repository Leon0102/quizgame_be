import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Quiz } from '../quiz/quiz.entity';

@Entity({ name: 'category' })
export class Category {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Quiz, (quiz) => quiz.category)
  @JoinColumn()
  quiz: Quiz[];
}
