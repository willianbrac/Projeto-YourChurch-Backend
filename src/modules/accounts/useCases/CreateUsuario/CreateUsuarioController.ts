import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";

class CreateUsuarioController {
  async handler(request: Request, response: Response): Promise<Response> {
    const {
      foto_perfil_usuario,
      primeiro_nome_usuario,
      ultimo_nome_usuario,
      email_usuario,
      senha_usuario,
      cpf_usuario,
      id_cargo,
      rua_usuario,
      bairro_usuario,
      cep_usuario,
      numero_residencia_usuario,
      complemento_residencia_usuario,
      cidade_usuario,
      estado_usuario,
      pais_usuario,
    } = request.body;

    const createUsuarioUseCase = container.resolve(CreateUsuarioUseCase);

    await createUsuarioUseCase.execute({
      foto_perfil_usuario,
      primeiro_nome_usuario,
      ultimo_nome_usuario,
      email_usuario,
      senha_usuario,
      cpf_usuario,
      id_cargo,
      rua_usuario,
      bairro_usuario,
      cep_usuario,
      numero_residencia_usuario,
      complemento_residencia_usuario,
      cidade_usuario,
      estado_usuario,
      pais_usuario,
    });

    return response.status(201).send();
  }
}

export { CreateUsuarioController };
