import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUniqueTipoAtividadeUseCase } from "./ListUniqueTipoAtividadeUseCase";

class ListUniqueTipoAtividadeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listUniqueTipoAtividadeUseCase = container.resolve(
      ListUniqueTipoAtividadeUseCase
    );

    const tipoAtividade = await listUniqueTipoAtividadeUseCase.execute(id);

    return response.status(201).send(tipoAtividade);
  }
}

export { ListUniqueTipoAtividadeController };
