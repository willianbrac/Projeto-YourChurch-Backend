import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteAtividadeUseCase } from "./DeleteAtividadeUseCase";

class DeleteAtividadeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_atividade } = request.params;
    const deleteAtividadeUseCase = container.resolve(DeleteAtividadeUseCase);

    await deleteAtividadeUseCase.execute({ id_atividade });

    return response
      .status(201)
      .json({ message: "Atividade deletada com sucesso" });
  }
}

export { DeleteAtividadeController };
