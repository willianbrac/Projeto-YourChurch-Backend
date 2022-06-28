import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUsuarioUseCase } from "./UpdateUsuarioUseCase";

class UpdateUsuarioController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.usuario;
    const {
      primeiro_nome_usuario,
      ultimo_nome_usuario,
      email_usuario,
      foto_perfil_usuario,
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

    const updateUsuarioUseCase = container.resolve(UpdateUsuarioUseCase);

    const usuario = await updateUsuarioUseCase.execute({
      id_usuario: id,
      primeiro_nome_usuario,
      ultimo_nome_usuario,
      email_usuario,
      foto_perfil_usuario,
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
    return response.status(201).json(usuario);
  }
}

export { UpdateUsuarioController };
