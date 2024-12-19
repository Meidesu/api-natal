import { User } from "../entities/user.entity";
import { BaseRepository } from "./base.repository";

export interface DrawRepository extends BaseRepository<Draw> {
  getByEventId(id: number): Promise<Draw | null>;
}
