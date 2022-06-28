import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUniqueCargoUseCase } from "./ListUniqueCargoUseCase";

class ListUniqueCargoController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listUniqueCargoUseCase = container.resolve(ListUniqueCargoUseCase);
    const cargo = await listUniqueCargoUseCase.execute({ id });

    return response.status(201).send(cargo);
  }
}

export { ListUniqueCargoController };
