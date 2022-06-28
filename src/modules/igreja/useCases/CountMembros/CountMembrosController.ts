import { Request, Response } from "express";
import { container } from "tsyringe";

import { CountMembrosUseCase } from "./CountMembrosUseCase";

class CountMembrosController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_igreja } = request.body;
    const countMembrosUseCase = container.resolve(CountMembrosUseCase);

    const membros = await countMembrosUseCase.execute(id_igreja);

    return response.status(201).json(membros);
  }
}

export { CountMembrosController };
