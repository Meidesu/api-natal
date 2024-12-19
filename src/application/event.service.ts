import { container, inject, injectable } from "tsyringe";
import { Event } from "../domain/entities/event.entity";
import { EventRepository } from "../domain/repositories/event.repository";

interface CreateEventRequest {
  name: string;
  description: string;
}

@injectable()
export class EventService {
  constructor(
    @inject("EventRepository") private eventRepository: EventRepository
  ) {
    console.log(eventRepository);
  }

  async createEvent({ name, description }: CreateEventRequest): Promise<Event> {
    const newEvent: Event = new Event(name, description, 1);

    return this.eventRepository.create(newEvent);
  }

  async listAllEvents(): Promise<Event[]> {
    const events = this.eventRepository.list();

    console.log("sdfadfadfadfasdfa", events);
    return events;
  }
}
