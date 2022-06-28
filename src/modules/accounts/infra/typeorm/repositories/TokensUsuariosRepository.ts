import { getRepository, Repository } from "typeorm";

import { ICreateTokenUsuarioDTO } from "../../../dtos/ICreateTokenUsuarioDTO";
import { ITokensUsuariosRepository } from "../../../repositories/ITokensUsuariosRepository";
import { TokensUsuarios } from "../entities/TokensUsuarios";

class TokensUsuariosRepository implements ITokensUsuariosRepository {
  private repository: Repository<TokensUsuarios>;

  constructor() {
    this.repository = getRepository(TokensUsuarios);
  }
  async create({
    expires_date,
    refresh_token,
    id_usuario,
  }: ICreateTokenUsuarioDTO): Promise<TokensUsuarios> {
    const tokenUsuario = this.repository.create({
      expires_date,
      refresh_token,
      id_usuario,
    });
    await this.repository.save(tokenUsuario);
    return tokenUsuario;
  }
}

export { TokensUsuariosRepository };
