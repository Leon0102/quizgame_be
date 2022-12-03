import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';

@Controller('category')
@ApiTags('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAll() {
    const rs = await this.categoryService.getAll();
    return {
      trivia_categories: rs
    };
  }

  @Post()
  createCategory() {
    return 'create category';
  }
}
