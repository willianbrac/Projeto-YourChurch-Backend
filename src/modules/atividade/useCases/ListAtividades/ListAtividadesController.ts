import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAtividadesUseCase } from "./ListAtividadesUseCase";

class ListAtividadesController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listAtividadesUseCase = container.resolve(ListAtividadesUseCase);

    const atividades = await listAtividadesUseCase.execute();

    return response.status(201).json(atividades);
  }
}

export { ListAtividadesController };
