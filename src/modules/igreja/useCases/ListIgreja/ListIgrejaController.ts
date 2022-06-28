import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListIgrejaUseCase } from "./ListIgrejaUseCase";

class ListIgrejaController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_igreja } = request.params;

    const listIgrejaUseCase = container.resolve(ListIgrejaUseCase);

    const igreja = await listIgrejaUseCase.execute({ id_igreja });

    return response.status(201).send(igreja);
  }
}

export { ListIgrejaController };
