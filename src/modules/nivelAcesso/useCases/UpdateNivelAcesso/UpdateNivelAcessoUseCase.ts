import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { INivelAcessoRepository } from "../../repositories/INivelAcessoRepository";

interface IRequest {
  id_nivel_acesso: string;
  titulo_nivel_acesso: string;
  tipo_nivel_acesso: number;
  descricao: string;
}

interface IResponse {
  id_nivel_acesso: string;
  titulo_nivel_acesso: string;
  tipo_nivel_acesso: number;
  descricao: string;
}

@injectable()
class UpdateNivelAcessoUseCase {
  constructor(
    @inject("NivelAcessoRepository")
    private nivelAcessoRepository: INivelAcessoRepository
  ) {}

  async execute({
    id_nivel_acesso,
    titulo_nivel_acesso,
    tipo_nivel_acesso,
    descricao,
  }: IRequest): Promise<IResponse> {
    const nivelacesso = await this.nivelAcessoRepository.listUniqueNivelAcesso(
      id_nivel_acesso
    );

    if (!nivelacesso) {
      throw new AppError("Nivel de acesso nao existe");
    }

    nivelacesso.titulo_nivel_acesso =
      titulo_nivel_acesso || nivelacesso.titulo_nivel_acesso;

    nivelacesso.tipo_nivel_acesso =
      tipo_nivel_acesso || nivelacesso.tipo_nivel_acesso;

    nivelacesso.descricao = descricao || nivelacesso.descricao;

    const updateNivelAcesso = await this.nivelAcessoRepository.update(
      nivelacesso
    );

    const returnTipoAtividade: IResponse = {
      id_nivel_acesso: updateNivelAcesso.id_nivel_acesso,
      titulo_nivel_acesso: updateNivelAcesso.titulo_nivel_acesso,
      tipo_nivel_acesso: updateNivelAcesso.tipo_nivel_acesso,
      descricao: updateNivelAcesso.descricao,
    };
    return returnTipoAtividade;
  }
}

export { UpdateNivelAcessoUseCase };
