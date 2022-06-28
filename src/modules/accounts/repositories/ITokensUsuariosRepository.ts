import { ICreateTokenUsuarioDTO } from "../dtos/ICreateTokenUsuarioDTO";
import { TokensUsuarios } from "../infra/typeorm/entities/TokensUsuarios";

interface ITokensUsuariosRepository {
  create({
    expires_date,
    refresh_token,
    id_usuario,
  }: ICreateTokenUsuarioDTO): Promise<TokensUsuarios>;
}

export { ITokensUsuariosRepository };
