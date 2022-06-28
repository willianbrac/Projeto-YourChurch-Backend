import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteIgrejaUseCase } from "./DeleteIgrejaUseCase";

class DeleteIgrejaController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_igreja } = request.params;

    const deleteIgrejaUseCase = container.resolve(DeleteIgrejaUseCase);

    await deleteIgrejaUseCase.execute({ id_igreja });

    return response
      .status(201)
      .json({ message: "Igreja deletada com sucesso" });
  }
}

export { DeleteIgrejaController };
