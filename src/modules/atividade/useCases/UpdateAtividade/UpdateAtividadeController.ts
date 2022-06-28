import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateAtividadeUseCase } from "./UpdateAtividadeUseCase";

class UpdateAtividadeController {
  async handler(request: Request, response: Response) {
    const { id_atividade } = request.params;
    const {
      id_tipo_atividade,
      id_igreja,
      data_atividade,
      hora_inicio_atividade,
      hora_termino_atividade,
      quantidade_visitantes_atividade,
      quantidade_membros_atividade,
      tema_atividade,
      responsavel_atividade,
      dizimo_atividade,
      oferta_atividade,
      num_reconciliacao_atividade,
      num_decisoes_atividade,
      preleitor_atividade,
      observacao_atividade,
    } = request.body;

    const updateAtividadeUseCase = container.resolve(UpdateAtividadeUseCase);

    const atividade = await updateAtividadeUseCase.execute({
      id_atividade,
      id_tipo_atividade,
      id_igreja,
      data_atividade,
      hora_inicio_atividade,
      hora_termino_atividade,
      quantidade_visitantes_atividade,
      quantidade_membros_atividade,
      tema_atividade,
      responsavel_atividade,
      dizimo_atividade,
      oferta_atividade,
      num_reconciliacao_atividade,
      num_decisoes_atividade,
      preleitor_atividade,
      observacao_atividade,
    });

    return response.status(201).json(atividade);
  }
}

export { UpdateAtividadeController };
