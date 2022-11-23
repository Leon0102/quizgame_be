import { setSeederFactory } from 'typeorm-extension';
import { Quiz } from '../../modules/quiz/quiz.entity';

export default setSeederFactory(Quiz, (faker) => {
  const Difficulty = ['easy', 'medium', 'hard'];
  const Type = ['multiple', 'boolean'];
  const quiz = new Quiz();
  quiz.question = faker.lorem.sentence();
  quiz.difficulty = Difficulty[Math.floor(Math.random() * Difficulty.length)];
  quiz.type = Type[Math.floor(Math.random() * Type.length)];
  if (quiz.type === 'multiple') {
    quiz.correct_answer = faker.lorem.word();
    quiz.incorrect_answers = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()];
  }
  if (quiz.type === 'boolean') {
    quiz.correct_answer = 'true';
    quiz.incorrect_answers = ['false'];
  }
  return quiz;
});
