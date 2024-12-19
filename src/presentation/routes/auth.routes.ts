import { Application } from "express";
import { CommonRoute } from "./common.routes";

export class AuthRoutes extends CommonRoute {
  constructor(app: Application) {
    super(app, "autenticação", "/auth");
  }

  configureRoutes(): Application {
    this.app.route(`${this.suffix}/signUp`).post();
    this.app.route(`${this.suffix}/signIn`).post();

    return this.app;
  }
}
