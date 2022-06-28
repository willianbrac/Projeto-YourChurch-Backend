import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListIgrejasUseCase } from "./ListIgrejasUseCase";

class ListIgrejasController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listIgrejasUseCase = container.resolve(ListIgrejasUseCase);

    const igrejas = await listIgrejasUseCase.execute();

    return response.status(201).json(igrejas);
  }
}

export { ListIgrejasController };
