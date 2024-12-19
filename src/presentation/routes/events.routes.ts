import { Application } from "express";
import { CommonRoute } from "./common.routes";
import { container } from "tsyringe";
import { EventsController } from "../controllers/events.controller";

export class EventsRoutes extends CommonRoute {
  constructor(app: Application) {
    super(app, "eventos", "/events");
  }

  configureRoutes(): Application {
    const controller = container.resolve(EventsController);

    this.app.route(this.suffix).get(controller.listAll).post(controller.create);
    this.app.route(`${this.suffix}/:id`).get().put().delete();

    return this.app;
  }
}
