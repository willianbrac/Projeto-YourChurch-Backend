import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateIgrejaUseCase } from "./CreateIgrejaUseCase";

class CreateIgrejaController {
  async handler(request: Request, response: Response): Promise<Response> {
    const {
      nome_igreja,
      cnpj_igreja,
      logo_igreja,
      isMatriz,
      quantidade_membro_igreja,
      rua_igreja,
      bairro_igreja,
      cep_igreja,
      numero_residencia_igreja,
      complemento_residencia_igreja,
      id_usuario,
      cidade_igreja,
      estado_igreja,
      pais_igreja,
      id_igreja_matriz,
    } = request.body;

    const createIgrejaUseCase = container.resolve(CreateIgrejaUseCase);

    await createIgrejaUseCase.execute({
      nome_igreja,
      cnpj_igreja,
      logo_igreja,
      isMatriz,
      quantidade_membro_igreja,
      rua_igreja,
      bairro_igreja,
      cep_igreja,
      numero_residencia_igreja,
      complemento_residencia_igreja,
      id_usuario,
      cidade_igreja,
      estado_igreja,
      pais_igreja,
      id_igreja_matriz,
    });
    return response.status(201).send();
  }
}

export { CreateIgrejaController };
