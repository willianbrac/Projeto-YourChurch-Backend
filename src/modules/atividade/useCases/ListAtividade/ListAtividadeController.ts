import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAtividadeUseCase } from "./ListAtividadeUseCase";

class ListAtividadeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_atividade } = request.params;

    const listAtividadeUseCase = container.resolve(ListAtividadeUseCase);

    const atividade = await listAtividadeUseCase.execute({ id_atividade });

    return response.status(201).json(atividade);
  }
}

export { ListAtividadeController };
