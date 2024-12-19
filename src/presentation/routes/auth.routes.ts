import { Application } from "express";
import { CommonRoute } from "./common.routes";
import { container } from "tsyringe";
import { AuthController } from "../controllers/auth.controller";

export class AuthRoutes extends CommonRoute {
  constructor(app: Application) {
    super(app, "autenticação", "/auth");
  }

  configureRoutes(): Application {
    const controller = container.resolve(AuthController);

    this.app.route(`${this.suffix}/signUp`).post(controller.signUp);
    this.app.route(`${this.suffix}/signIn`).post();

    return this.app;
  }
}
