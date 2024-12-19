import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private name: string;

  @Column()
  private email: string;

  @Column()
  private password: string;

  @Column()
  private interests: string;

  constructor(
    name: string,
    email: string,
    password: string,
    interests: string
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.interests = interests;
  }
}
