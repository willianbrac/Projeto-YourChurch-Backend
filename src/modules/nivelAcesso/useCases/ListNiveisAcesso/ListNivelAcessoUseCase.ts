import { inject, injectable } from "tsyringe";

import { NivelAcesso } from "../../infra/typeorm/entities/NivelAcesso";
import { INivelAcessoRepository } from "../../repositories/INivelAcessoRepository";

@injectable()
class ListNivelAcessoUseCase {
  constructor(
    @inject("NivelAcessoRepository")
    private nivelAcessoRepository: INivelAcessoRepository
  ) {}

  async execute(): Promise<NivelAcesso[]> {
    const todosNiveisAcesso = await this.nivelAcessoRepository.list();

    return todosNiveisAcesso;
  }
}

export { ListNivelAcessoUseCase };
