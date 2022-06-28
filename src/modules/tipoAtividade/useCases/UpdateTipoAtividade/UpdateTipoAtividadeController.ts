import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTipoAtividadeUseCase } from "./UpdateTipoAtividadeUseCase";

class UpdateTipoAtividadeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_tipo_atividade } = request.params;
    const {
      nome_tipo_atividade,
      modalidade_tipo_atividade,
      gera_arrecadacao_tipo_atividade,
      descricao,
    } = request.body;

    const updateTipoAtividadeUseCase = container.resolve(
      UpdateTipoAtividadeUseCase
    );

    const tipoatividade = await updateTipoAtividadeUseCase.execute({
      id_tipo_atividade,
      nome_tipo_atividade,
      modalidade_tipo_atividade,
      gera_arrecadacao_tipo_atividade,
      descricao,
    });

    return response.status(201).json(tipoatividade);
  }
}

export { UpdateTipoAtividadeController };
