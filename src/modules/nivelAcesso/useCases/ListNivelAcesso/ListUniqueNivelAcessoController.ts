import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUniqueNivelAcessoUseCase } from "./ListUniqueNivelAcessoUseCase";

class ListUniqueNivelAcessoController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listUniqueNivelAcessoUseCase = container.resolve(
      ListUniqueNivelAcessoUseCase
    );

    const uniqueNivelAcesso = await listUniqueNivelAcessoUseCase.execute({
      id,
    });

    return response.status(201).send(uniqueNivelAcesso);
  }
}

export { ListUniqueNivelAcessoController };
