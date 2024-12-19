import { Repository } from "typeorm";
import { Event } from "../../domain/entities/event.entity";
import { EventRepository } from "../../domain/repositories/event.repository";
import { AppDataSource } from "../../../data-source";

export class TypeOrmEventRepository implements EventRepository {
  private repository: Repository<Event>;

  constructor() {
    this.repository = AppDataSource.getRepository(Event);
  }

  async findById(id: number): Promise<Event | null> {
    return this.repository.findOneBy({ id });
  }

  async list(): Promise<Event[]> {
    const events: Event[] = await this.repository.find();
    return events;
  }
  async create(entity: Event): Promise<Event> {
    const createdEvent: Event = await this.repository.save(entity);

    return createdEvent;
  }
}
