import { Request, Response } from "express";
import { container } from "tsyringe";

import { CountValoresUseCase } from "./CountValoresUseCase";

class CountValoresController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_igreja } = request.body;
    const countValoresUseCase = container.resolve(CountValoresUseCase);

    const atividades = await countValoresUseCase.execute(id_igreja);

    return response.status(201).json(atividades);
  }
}

export { CountValoresController };
