import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCargoUseCase } from "./CreateCargoUseCase";

class CreateCargoController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { nome_cargo, descricao, id_nivel_acesso } = request.body;

    const createCargoUseCase = container.resolve(CreateCargoUseCase);

    await createCargoUseCase.execute({
      nome_cargo,
      descricao,
      id_nivel_acesso,
    });

    return response.status(201).send();
  }
}

export { CreateCargoController };
