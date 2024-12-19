import { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
import { EventService } from "../../application/event.service";
import { Event } from "../../domain/entities/event.entity";

@injectable()
export class EventsController {
  constructor(private eventService: EventService) {
    console.log(eventService);
  }

  public listAll = async (req: Request, res: Response) => {
    console.log("service", this.eventService);

    const events: Event[] = await this.eventService.listAllEvents();

    res.status(200).json(events);
  };

  public create = async (req: Request, res: Response) => {
    const { name, description } = req.body;

    const newEvent: Event = await this.eventService.createEvent({
      name,
      description,
    });

    res.status(200).json(newEvent);
  };
}

export default container.resolve(EventsController);
