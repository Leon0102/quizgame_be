import { Repository } from 'typeorm';

export abstract class BaseRepository<T> {
  abstract getRepository(): Repository<T>;

  async getAll(): Promise<T[]> {
    return await this.getRepository().find();
  }
  async create(entity: T): Promise<T> {
    return await this.getRepository().save(entity);
  }

  async delete(id: number): Promise<void> {
    await this.getRepository().delete(id);
  }
}
