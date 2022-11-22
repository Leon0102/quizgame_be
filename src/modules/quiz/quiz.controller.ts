import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QuizService } from './quiz.service';

@Controller('quiz')
@ApiTags('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}
}
