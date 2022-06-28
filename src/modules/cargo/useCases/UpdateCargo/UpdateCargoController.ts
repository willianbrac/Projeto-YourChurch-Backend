import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCargoUseCase } from "./UpdateCargoUseCase";

class UpdateCargoController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_cargo } = request.params;
    const { nome_cargo, descricao, id_nivel_acesso } = request.body;
    const updateCargoUseCase = container.resolve(UpdateCargoUseCase);
    const cargo = await updateCargoUseCase.execute({
      id_cargo,
      nome_cargo,
      descricao,
      id_nivel_acesso,
    });

    return response.status(201).json(cargo);
  }
}

export { UpdateCargoController };
