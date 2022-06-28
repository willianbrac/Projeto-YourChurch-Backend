import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsuarioUseCase } from "./ListUsuarioUseCase";

class ListUsuarioController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listUsuarioUseCase = container.resolve(ListUsuarioUseCase);
    const allUsuarios = await listUsuarioUseCase.execute();
    return response.status(201).json(allUsuarios);
  }
}

export { ListUsuarioController };
