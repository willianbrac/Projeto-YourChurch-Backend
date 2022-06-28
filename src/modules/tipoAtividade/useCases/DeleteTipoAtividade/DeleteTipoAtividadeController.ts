import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteTipoAtividadeUseCase } from "./DeleteTipoAtividadeUseCase";

class DeleteTipoAtividadeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTipoAtividadeUseCase = container.resolve(
      DeleteTipoAtividadeUseCase
    );

    await deleteTipoAtividadeUseCase.execute({
      id,
    });
    return response
      .status(201)
      .json({ message: "Tipo de atividade deletado com sucesso" });
  }
}

export { DeleteTipoAtividadeController };
