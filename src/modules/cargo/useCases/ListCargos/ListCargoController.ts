import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCargoUseCase } from "./ListCargoUseCase";

class ListCargoController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listCargoUseCase = container.resolve(ListCargoUseCase);

    const allCargos = await listCargoUseCase.execute();

    return response.status(201).send(allCargos);
  }
}

export { ListCargoController };
