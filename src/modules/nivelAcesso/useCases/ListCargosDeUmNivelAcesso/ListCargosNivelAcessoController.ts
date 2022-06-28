import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCargosNivelAcessoUseCase } from "./ListCargosNivelAcessoUseCase";

class ListCargosNivelAcessoController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listCargosNivelAcessoUseCase = container.resolve(
      ListCargosNivelAcessoUseCase
    );

    const allCargos = await listCargosNivelAcessoUseCase.execute({ id });

    return response.status(201).json(allCargos);
  }
}

export { ListCargosNivelAcessoController };
