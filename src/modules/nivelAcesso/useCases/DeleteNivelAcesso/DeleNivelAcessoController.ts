import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteNivelAcessoUseCase } from "./DeleteNivelAcessoUseCase";

class DeleteNivelAcessoController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteNivelAcessoUseCase = container.resolve(
      DeleteNivelAcessoUseCase
    );
    await deleteNivelAcessoUseCase.execute({ id });

    return response
      .status(201)
      .json({ message: "Nivel de acesso deletado com sucesso" });
  }
}

export { DeleteNivelAcessoController };
