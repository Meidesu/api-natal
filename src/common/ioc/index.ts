import { container } from "tsyringe";
import { EventRepository } from "../../domain/repositories/event.repository";
import { TypeOrmUserRepository } from "../../persistence/typeorm/typeorm.event.repository";
import { EventService } from "../../application/event.service";

container.register<EventRepository>("EventRepository", TypeOrmUserRepository);
// container.register<EventService>("EventService", EventService);
