import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async getAll(): Promise<Category[]> {
    return await this.categoryRepository.getAll();
  }

  async create(category: Category): Promise<Category> {
    return await this.categoryRepository.create(category);
  }

  async delete(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }

  async getCategoryByName(name: string): Promise<Category> {
    return await this.categoryRepository.getCategoryByName(name);
  }
}
