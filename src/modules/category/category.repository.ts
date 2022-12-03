import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../utils/base.abstract';
import { Category } from './category.entity';


export class CategoryRepository extends BaseRepository<Category> {

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {
    super();
  }

  getRepository(): Repository<Category> {
    return this.categoryRepository;
  }

  async getCategoryByName(name: string): Promise<Category> {
    return this.getRepository().findOne({
      where: {
        name: name,
      },
    });
  }
}
