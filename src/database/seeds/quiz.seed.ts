import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Quiz } from '../../modules/quiz/quiz.entity';


export class QuizSeeder implements Seeder {
  async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
    const repository = dataSource.getRepository('quiz');
    const quiz = factoryManager.get(Quiz);
    await quiz.saveMany(100);
  }

}
