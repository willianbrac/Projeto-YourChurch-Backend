import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListNivelAcessoUseCase } from "./ListNivelAcessoUseCase";

class ListNivelAcessoController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listNivelAcessoUseCase = container.resolve(ListNivelAcessoUseCase);
    const todosNiveisAcesso = await listNivelAcessoUseCase.execute();

    return response.status(201).send(todosNiveisAcesso);
  }
}

export { ListNivelAcessoController };
