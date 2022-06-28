import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { ICargoRepository } from "../../../cargo/repositories/ICargoRepository";
import { INivelAcessoRepository } from "../../../nivelAcesso/repositories/INivelAcessoRepository";
import { ITokensUsuariosRepository } from "../../repositories/ITokensUsuariosRepository";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";

interface IRequest {
  email_usuario: string;
  senha_usuario: string;
}

interface IResponse {
  user: {
    email_usuario: string;
    primeiro_nome_usuario: string;
    ultimo_nome_usuario: string;
    id_usuario: string;
  };
  token: string;
  refresh_token: string;
}

@injectable()
class AuthenticateUsuarioUseCase {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository,
    @inject("CargoRepository")
    private cargoRepository: ICargoRepository,
    @inject("NivelAcessoRepository")
    private nivelAcessoRepository: INivelAcessoRepository,
    @inject("TokensUsuariosRepository")
    private tokensUsuariosRepository: ITokensUsuariosRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute({
    email_usuario,
    senha_usuario,
  }: IRequest): Promise<IResponse> {
    const user = await this.usuarioRepository.findByEmail(email_usuario);
    const {
      expires_in_token,
      secret_refresh_token,
      secret_token,
      expires_in_refresh_token,
      expires_in_refresh_token_days,
    } = auth;

    if (!user) {
      throw new AppError("Email ou senha incorreto");
    }
    const { id_cargo } = user;
    const cargo = await this.cargoRepository.findByCargoId(id_cargo);

    if (!cargo) {
      throw new AppError("cargo não existe");
    }

    const { id_nivel_acesso } = cargo;
    const nivelacesso = await this.nivelAcessoRepository.listUniqueNivelAcesso(
      id_nivel_acesso
    );

    if (!nivelacesso) {
      throw new AppError("nivel de acesso não existe");
    }
    const senhaIgual = await compare(senha_usuario, user.senha_usuario);

    if (!senhaIgual) {
      throw new AppError("Email ou senha incorreto");
    }

    const token = sign({ user, cargo, nivelacesso }, secret_token, {
      subject: user.id_usuario,
      expiresIn: expires_in_token,
    });

    const refresh_token = sign({}, secret_refresh_token, {
      subject: user.id_usuario,
      expiresIn: expires_in_refresh_token,
    });
    const refresh_token_expires_date = this.dateProvider.addDays(
      expires_in_refresh_token_days
    );

    await this.tokensUsuariosRepository.create({
      expires_date: refresh_token_expires_date,
      refresh_token,
      id_usuario: user.id_usuario,
    });

    const tokenReturn: IResponse = {
      user: {
        email_usuario: user.email_usuario,
        primeiro_nome_usuario: user.primeiro_nome_usuario,
        ultimo_nome_usuario: user.ultimo_nome_usuario,
        id_usuario: user.id_usuario,
      },
      token,
      refresh_token,
    };
    return tokenReturn;
  }
}

export { AuthenticateUsuarioUseCase };
