import { Request, Response } from "express";
import { container } from "tsyringe";

import { ValuesRelatorioUseCase } from "./ValuesRelatorioUseCase";

class ValuesRelatorioController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_igreja } = request.query;
    const valuesRelatorioUseCase = container.resolve(ValuesRelatorioUseCase);

    const relatorio = await valuesRelatorioUseCase.execute(id_igreja as string);

    return response.status(201).json(relatorio);
  }
}

export { ValuesRelatorioController };
