import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTipoAtividadeUseCase } from "./ListTipoAtividadeUseCase";

class ListTipoAtividadeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listTipoAtividadeUseCase = container.resolve(
      ListTipoAtividadeUseCase
    );
    const todosTipoAtividade = await listTipoAtividadeUseCase.execute();
    return response.status(201).json(todosTipoAtividade);
  }
}

export { ListTipoAtividadeController };
