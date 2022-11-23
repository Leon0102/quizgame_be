import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Quiz } from '../../modules/quiz/quiz.entity';


export class CategorySeeder implements Seeder {
  public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
    const repository = dataSource.getRepository('category');
    const quiz = factoryManager.get(Quiz);
    const category = await repository.save([
      {
        name: "General Knowledge",
        quizzes: await quiz.saveMany(10)
      },
      {
        name: "Entertainment: Books",
        quizzes: await quiz.saveMany(10)
      },
      {
        name: "Entertainment: Film",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Entertainment: Music",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Entertainment: Musicals & Theatres",

        quizzes: await quiz.saveMany(10)
      },
      {
        name: "Entertainment: Television",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Entertainment: Video Games",
        quizzes: await quiz.saveMany(10)
      },
      {
        name: "Entertainment: Board Games",
        quizzes: await quiz.saveMany(10)
      },
      {
        name: "Science & Nature",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Science: Computers",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Science: Mathematics",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Mythology",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Sports",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Geography",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "History",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Politics",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Art",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Celebrities",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Animals",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Vehicles",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Entertainment: Comics",
        quizzes: await quiz.saveMany(10)


      },
      {
        name: "Science: Gadgets",
        quizzes: await quiz.saveMany(10)

      },
      {
        name: "Entertainment: Japanese Anime & Manga",
        quizzes: await quiz.saveMany(10)
      },
      {
        name: "Entertainment: Cartoon & Animations",
        quizzes: await quiz.saveMany(10)

      }
    ]
    );



  }
}
