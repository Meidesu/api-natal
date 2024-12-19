import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import "../src/common/ioc";
import { AuthRoutes } from "./presentation/routes/auth.routes";
import { CommonRoute } from "./presentation/routes/common.routes";
import { EventsRoutes } from "./presentation/routes/events.routes";
import { HttpException } from "./presentation/exceptions/http.exception";

const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Bem-vindo!" });
});

const routes: CommonRoute[] = [];

routes.push(new AuthRoutes(app), new EventsRoutes(app));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpException) {
    res.status(400).json({ detail: err.message });
  }

  next();
});

app.listen(PORT, () => {
  console.log("\nConfiguração das rotas: ");

  for (let route of routes) {
    console.log("\trotas de ", route.getName(), "-", route.getSuffix());
  }

  console.log(`\nServidor rodando na porta ${PORT}`);
});
