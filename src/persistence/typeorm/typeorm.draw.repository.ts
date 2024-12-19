import { Repository } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { DrawRepository } from "../../domain/repositories/draw.repository";
import { Draw } from "../../domain/entities/draw.entity";

export class TypeOrmDrawRepository implements DrawRepository {
  private repository: Repository<Draw>;

  constructor() {
    this.repository = AppDataSource.getRepository(Draw);
  }

  getByEventId(id: number): Promise<Draw | null> {
    throw new Error("Method not implemented.");
  }

  async findById(id: number): Promise<Draw | null> {
    return this.repository.findOneBy({ id });
  }

  async list(): Promise<Draw[]> {
    const draws: Draw[] = await this.repository.find();
    return draws;
  }
  async create(entity: Draw): Promise<Draw> {
    const createdEvent: Draw = await this.repository.save(entity);

    return createdEvent;
  }
}
