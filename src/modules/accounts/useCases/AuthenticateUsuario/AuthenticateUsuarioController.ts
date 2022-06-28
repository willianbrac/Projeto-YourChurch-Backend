import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUsuarioUseCase } from "./AuthenticateUsuarioUseCase";

class AuthenticateUsuarioController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { email_usuario, senha_usuario } = request.body;

    const authenticateUsuarioUseCase = container.resolve(
      AuthenticateUsuarioUseCase
    );

    const token = await authenticateUsuarioUseCase.execute({
      email_usuario,
      senha_usuario,
    });

    return response.json(token);
  }
}

export { AuthenticateUsuarioController };
