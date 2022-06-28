import { Request, Response } from "express";
import { container } from "tsyringe";

import { AdminUpdateUsuarioUseCase } from "./AdminUpdateUsuarioUseCase";

class AdminUpdateUsuarioController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id_usuario } = request.params;
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

    const adminUpdateUsuarioUseCase = container.resolve(
      AdminUpdateUsuarioUseCase
    );

    const usuario = await adminUpdateUsuarioUseCase.execute({
      id_usuario,
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

export { AdminUpdateUsuarioController };
