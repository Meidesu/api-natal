import { Repository } from "typeorm";
import { Event } from "../../domain/entities/event.entity";
import { EventRepository } from "../../domain/repositories/event.repository";
import { AppDataSource } from "../../../data-source";

export class TypeOrmUserRepository implements EventRepository {
  private repository: Repository<Event>;

  constructor() {
    this.repository = AppDataSource.getRepository(Event);
  }

  async findByUserId(userId: number): Promise<Event[]> {
    return [new Event("name", "description", 0)];
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
