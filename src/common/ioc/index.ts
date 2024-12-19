import { container } from "tsyringe";
import { EventRepository } from "../../domain/repositories/event.repository";
import { TypeOrmEventRepository } from "../../persistence/typeorm/typeorm.event.repository";
import { EventService } from "../../application/event.service";
import { UserRepository } from "../../domain/repositories/user.repository";
import { TypeOrmUserRepository } from "../../persistence/typeorm/typeorm.user.repository";

container.register<EventRepository>("EventRepository", TypeOrmEventRepository);
container.register<UserRepository>("UserRepository", TypeOrmUserRepository);
