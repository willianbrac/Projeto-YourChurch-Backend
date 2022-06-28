import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateNivelAcessoUseCase } from "./UpdateNivelAcessoUseCase";

class UpdateNivelAcessoController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_nivel_acesso } = request.params;
    const { titulo_nivel_acesso, tipo_nivel_acesso, descricao } = request.body;

    const updateNivelAcessoUseCase = container.resolve(
      UpdateNivelAcessoUseCase
    );
    const nivelacesso = await updateNivelAcessoUseCase.execute({
      id_nivel_acesso,
      titulo_nivel_acesso,
      tipo_nivel_acesso,
      descricao,
    });
    return response.status(201).json(nivelacesso);
  }
}

export { UpdateNivelAcessoController };
