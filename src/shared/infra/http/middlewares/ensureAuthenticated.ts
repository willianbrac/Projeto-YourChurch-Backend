import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "../../../../config/auth";
import { UsuarioRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsuarioRepository";
import { AppError } from "../../../errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authenticateHeader = request.headers.authorization;
  const { secret_token } = auth;

  if (!authenticateHeader) {
    throw new AppError("Procurando token...", 401);
  }

  const [, token] = authenticateHeader.split(" ");

  try {
    const { sub: id_usuario } = verify(token, secret_token) as IPayload;

    const usuarioRepository = new UsuarioRepository();

    const usuario = usuarioRepository.findById(id_usuario);

    if (!usuario) {
      throw new AppError("Usuario não existe", 401);
    }

    request.usuario = {
      id: id_usuario,
    };

    next();
  } catch {
    throw new AppError("Token invalido", 401);
  }
}
