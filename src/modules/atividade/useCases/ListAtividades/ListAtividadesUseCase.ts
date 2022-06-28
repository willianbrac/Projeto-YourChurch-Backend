import { inject, injectable } from "tsyringe";

import { Atividade } from "../../infra/typeorm/entities/Atividade";
import { IAtividadeRepository } from "../../repositories/IAtividadeRepository";

@injectable()
class ListAtividadesUseCase {
  constructor(
    @inject("AtividadeRepository")
    private atividadeRepository: IAtividadeRepository
  ) {}
  async execute(): Promise<Atividade[]> {
    const atividades = await this.atividadeRepository.list();
    return atividades;
  }
}

export { ListAtividadesUseCase };
