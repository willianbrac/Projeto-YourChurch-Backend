import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCargoUseCase } from "./DeleteCargoUseCase";

class DeleteCargoController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteCargoUseCase = container.resolve(DeleteCargoUseCase);

    await deleteCargoUseCase.execute({ id });

    return response.status(201).json({ message: "Cargo deletado com sucesso" });
  }
}

export { DeleteCargoController };
