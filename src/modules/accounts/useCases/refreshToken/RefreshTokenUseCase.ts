import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";

interface IPayload {
  sub: string;
  email: string;
}
@injectable()
class RefreshTokenUseCase {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository
  ) {}
  async execute(token: string): Promise<string> {
    const { secret_token, expires_in_token } = auth;
    const { sub } = verify(token, secret_token) as IPayload;

    const id_usuario = sub;

    const tokenUsuario = await this.usuarioRepository.findById(id_usuario);

    if (!tokenUsuario) {
      throw new AppError(" Usuario nao existe");
    }
    const novoToken = sign({ tokenUsuario }, secret_token, {
      subject: sub,
      expiresIn: expires_in_token,
    });

    return novoToken;
  }
}

export { RefreshTokenUseCase };
