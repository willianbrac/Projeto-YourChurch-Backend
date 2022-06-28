import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAtividadeUseCase } from "./CreateAtividadeUseCase";

class CreateAtividadeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const {
      id_igreja,
      id_tipo_atividade,
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

    const createAtividadeUseCase = container.resolve(CreateAtividadeUseCase);

    const atividade = await createAtividadeUseCase.execute({
      id_igreja,
      id_tipo_atividade,
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

export { CreateAtividadeController };
