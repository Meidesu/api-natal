export class User {
  private id: number = 0;
  private name: string;
  private email: string;
  private password: string;
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
