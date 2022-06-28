import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";

import { VerifyIgrejaMatrizUseCase } from "./VerifyIgrejaMatrizUseCase";

class VerifyIgrejaMatrizController {
  async handler(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response> {
    const { id } = request.usuario;

    const verifyIgrejaMatrizUseCase = container.resolve(
      VerifyIgrejaMatrizUseCase
    );

    const igrejaMatriz = await verifyIgrejaMatrizUseCase.execute({
      id_usuario: id,
    });

    try {
      if (igrejaMatriz.isMatriz === true) {
        next();
      }
    } catch {
      return response.status(400).json({ message: "Nao existe igreja matriz" });
    }

    return response.json(igrejaMatriz);
  }
}

export { VerifyIgrejaMatrizController };
