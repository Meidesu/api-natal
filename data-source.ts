import "reflect-metadata";
import { DataSource } from "typeorm";
import { Event } from "./src/domain/entities/event.entity";
import { User } from "./src/domain/entities/user.entity";

export const AppDataSource = new DataSource({
  type: "postgres",

  host: "localhost",
  port: 5432,
  database: "amg-o-culto",
  username: "meireles",
  password: "12345678",

  synchronize: false,
  logging: true,
  entities: [Event, User], // pode ser com abaixo
  migrations: ["src/persistence/typeorm/migrations/**/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Datasource is UP!!!");
  })
  .catch((err) => {
    console.log("Erro ao inicilizar o DS!", err);
  });
