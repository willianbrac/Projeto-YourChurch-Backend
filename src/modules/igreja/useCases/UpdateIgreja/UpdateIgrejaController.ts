import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateIgrejaUseCase } from "./UpdateIgrejaUseCase";

class UpdateIgrejaController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_igreja } = request.params;
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

    const updateIgrejaUseCase = container.resolve(UpdateIgrejaUseCase);

    const igreja = await updateIgrejaUseCase.execute({
      id_igreja,
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
    return response.status(201).json(igreja);
  }
}

export { UpdateIgrejaController };
