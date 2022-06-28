import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUsuarioUseCase } from "./DeleteUsuarioUseCase";

class DeleteUsuarioController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteUsuarioUseCase = container.resolve(DeleteUsuarioUseCase);

    await deleteUsuarioUseCase.execute({ id });

    return response
      .status(201)
      .json({ message: "Usuario deletado com sucesso" });
  }
}

export { DeleteUsuarioController };
