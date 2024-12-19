import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { AuthService } from "../../application/auth.service";
import { User } from "../../domain/entities/user.entity";

@injectable()
export class AuthController {
  constructor(private authService: AuthService) {}

  public signin = async (req: Request, res: Response) => {};

  public signUp = async (req: Request, res: Response) => {
    const { name, email, interests, password, confirmPassword } = req.body;

    const newUser: User = await this.authService.signUp({
      name,
      email,
      interests,
      password,
      confirmPassword,
    });

    res.status(200).json(newUser);
  };
}

export default container.resolve(AuthController);
