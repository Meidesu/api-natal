import { Repository } from "typeorm";
import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";
import { AppDataSource } from "../../../data-source";

export class TypeOrmUserRepository implements UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  findById(id: number): Promise<User | null> {
    return this.repository.findOneBy({ id });
  }

  getByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email });
  }

  list(): Promise<User[]> {
    return this.repository.find();
  }
  create(entity: User): Promise<User> {
    return this.repository.save(entity);
  }
}
