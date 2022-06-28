import { Request, Response } from "express";
import { container } from "tsyringe";

import { CountAtividadesUseCase } from "./CountAtividadesUseCase";

class CountAtividadesController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_igreja } = request.body;
    const countAtividadesUseCase = container.resolve(CountAtividadesUseCase);

    const atividades = await countAtividadesUseCase.execute(id_igreja);

    return response.status(201).json(atividades);
  }
}

export { CountAtividadesController };
