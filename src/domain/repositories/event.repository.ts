import { Event } from "../entities/event.entity";
import { BaseRepository } from "./base.repository";

export interface EventRepository extends BaseRepository<Event> {
  findByUserId(userId: number): Promise<Event[]>;
}
