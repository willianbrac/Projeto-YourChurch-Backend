import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Cargo } from "../../../cargo/infra/typeorm/entities/Cargo";
import { INivelAcessoRepository } from "../../repositories/INivelAcessoRepository";

interface IRequest {
  id: string;
}

@injectable()
class ListCargosNivelAcessoUseCase {
  constructor(
    @inject("NivelAcessoRepository")
    private nivelAcessoRepository: INivelAcessoRepository
  ) {}
  async execute({ id }: IRequest): Promise<Cargo[]> {
    const nivelacesso = await this.nivelAcessoRepository.listUniqueNivelAcesso(
      id
    );

    if (!nivelacesso) {
      throw new AppError("O nivel de acesso informado não existe");
    }

    return nivelacesso.cargos;
  }
}

export { ListCargosNivelAcessoUseCase };
