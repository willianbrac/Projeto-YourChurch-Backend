import { Request, Response } from "express";
import { container } from "tsyringe";

import { RelatorioAtividadesUseCase } from "./RelatorioAtividadesUseCase";

class RelatorioAtividadesController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_igreja } = request.params;
    const { id_tipo_atividade, data_inicio, data_final } = request.body;

    const relatorioAtividadesController = container.resolve(
      RelatorioAtividadesUseCase
    );

    const atividades = await relatorioAtividadesController.execute({
      id_igreja,
      data_inicio,
      data_final,
      id_tipo_atividade,
    });

    return response.status(201).json(atividades);
  }
}

export { RelatorioAtividadesController };
