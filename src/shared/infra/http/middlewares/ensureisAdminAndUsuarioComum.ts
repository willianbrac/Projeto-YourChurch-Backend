import { NextFunction, Request, Response } from "express";

import { UsuarioRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsuarioRepository";
import { CargoRepository } from "../../../../modules/cargo/infra/typeorm/repositories/CargoRepository";
import { NivelAcessoRepository } from "../../../../modules/nivelAcesso/infra/typeorm/repositories/NivelAcessoRepository";
import { AppError } from "../../../errors/AppError";

export async function ensureisAdminAndUsuarioComum(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.usuario;
  const usuarioRepository = new UsuarioRepository();
  const cargoRepository = new CargoRepository();
  const nivelacessoRepository = new NivelAcessoRepository();

  const usuario = await usuarioRepository.findById(id);

  if (!usuario) {
    throw new AppError("Usuario nao existe");
  }

  const { id_cargo } = usuario;
  const cargo = await cargoRepository.findByCargoId(id_cargo);

  if (!cargo) {
    throw new AppError("Cargo nao existe");
  }

  const { id_nivel_acesso } = cargo;
  const nivelacesso = await nivelacessoRepository.listUniqueNivelAcesso(
    id_nivel_acesso
  );

  if (!nivelacesso) {
    throw new AppError("Nivel de acesso nao existe");
  }

  if (
    (id === usuario.id_usuario &&
      usuario.id_cargo === cargo.id_cargo &&
      (await cargo.nivelAcesso).tipo_nivel_acesso === 1) ||
    (await cargo.nivelAcesso).tipo_nivel_acesso === 2
  ) {
    return next();
  }

  throw new AppError(
    "Usuario não tem permissão de administrador para realizar a operação"
  );
}
