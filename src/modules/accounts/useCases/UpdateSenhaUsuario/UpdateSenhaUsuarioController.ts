import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateSenhaUsuarioUseCase } from "./UpdateSenhaUsuarioUseCase";

class UpdateSenhaUsuarioController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.usuario;
    const { senha_usuario } = request.body;

    const updateSenhaUsuarioUseCase = container.resolve(
      UpdateSenhaUsuarioUseCase
    );

    await updateSenhaUsuarioUseCase.execute({
      id_usuario: id,
      senha_usuario,
    });

    return response.status(201).json({
      message: `Senha nova: ${senha_usuario}`,
    });
  }
}

export { UpdateSenhaUsuarioController };
