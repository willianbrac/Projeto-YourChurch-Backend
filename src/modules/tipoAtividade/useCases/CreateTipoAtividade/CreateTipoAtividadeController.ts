import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTipoAtividadeUseCase } from "./CreateTipoAtividadeUseCase";

class CreateTipoAtividadeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const {
      nome_tipo_atividade,
      modalidade_tipo_atividade,
      gera_arrecadacao_tipo_atividade,
      descricao,
    } = request.body;

    const createTipoAtividadeUseCase = container.resolve(
      CreateTipoAtividadeUseCase
    );

    await createTipoAtividadeUseCase.execute({
      nome_tipo_atividade,
      modalidade_tipo_atividade,
      gera_arrecadacao_tipo_atividade,
      descricao,
    });

    return response.status(201).send();
  }
}

export { CreateTipoAtividadeController };
