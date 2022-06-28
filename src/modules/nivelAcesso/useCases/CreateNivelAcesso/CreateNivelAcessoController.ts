import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateNivelAcessoUseCase } from "./CreateNivelAcessoUseCase";

class CreateNivelAcessoController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { titulo_nivel_acesso, tipo_nivel_acesso, descricao } = request.body;

    const createNivelAcessoUseCase = container.resolve(
      CreateNivelAcessoUseCase
    );
    await createNivelAcessoUseCase.execute({
      titulo_nivel_acesso,
      tipo_nivel_acesso,
      descricao,
    });

    return response.status(201).send();
  }
}

export { CreateNivelAcessoController };
