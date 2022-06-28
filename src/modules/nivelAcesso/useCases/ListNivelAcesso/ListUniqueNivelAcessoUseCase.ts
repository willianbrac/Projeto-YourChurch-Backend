import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { NivelAcesso } from "../../infra/typeorm/entities/NivelAcesso";
import { INivelAcessoRepository } from "../../repositories/INivelAcessoRepository";

interface IRequest {
  id: string;
}

@injectable()
class ListUniqueNivelAcessoUseCase {
  constructor(
    @inject("NivelAcessoRepository")
    private nivelAcessoRepository: INivelAcessoRepository
  ) {}
  async execute({ id }: IRequest): Promise<NivelAcesso> {
    const nivelAcessoUnico = await this.nivelAcessoRepository.listUniqueNivelAcesso(
      id
    );

    if (!nivelAcessoUnico) {
      throw new AppError("O nivel de acesso informado não existe");
    }

    return nivelAcessoUnico;
  }
}

export { ListUniqueNivelAcessoUseCase };
