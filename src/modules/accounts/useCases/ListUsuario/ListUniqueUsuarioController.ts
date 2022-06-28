import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUniqueUsuarioUseCase } from "./ListUniqueUsuarioUseCase";

class ListUniqueUsuarioController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listUniqueUsuarioUseCase = container.resolve(
      ListUniqueUsuarioUseCase
    );

    const usuario = await listUniqueUsuarioUseCase.execute({
      id,
    });

    return response.status(201).json({ usuario });
  }
}

export { ListUniqueUsuarioController };
