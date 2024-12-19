import { inject, injectable } from "tsyringe";
import { UserRepository } from "../domain/repositories/user.repository";
import { User } from "../domain/entities/user.entity";
import { HttpException } from "../presentation/exceptions/http.exception";

interface SignUpRequest {
  name: string;
  email: string;
  interests: string;
  password: string;
  confirmPassword: string;
}

@injectable()
export class AuthService {
  constructor(
    @inject("UserRepository") private userRepository: UserRepository
  ) {}

  async signUp({
    name,
    email,
    interests,
    password,
    confirmPassword,
  }: SignUpRequest) {
    const user: User | null = await this.userRepository.getByEmail(email);

    if (user) {
      throw new HttpException("Email já cadastrado");
    }

    if (confirmPassword != password) {
      throw new HttpException("As senhas informadas não coincidem");
    }

    const newUser: User = new User(name, email, password, interests);

    return this.userRepository.create(newUser);
  }
}
