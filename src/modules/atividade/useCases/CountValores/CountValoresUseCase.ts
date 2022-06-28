import { inject, injectable } from "tsyringe";

import { Atividade } from "../../infra/typeorm/entities/Atividade";
import { IAtividadeRepository } from "../../repositories/IAtividadeRepository";

@injectable()
class CountValoresUseCase {
  constructor(
    @inject("AtividadeRepository")
    private atividadeRepository: IAtividadeRepository
  ) {}
  async execute(id_igreja?: string): Promise<void> {
    const atividades = await this.atividadeRepository.isCountValues(id_igreja);
    return atividades;
  }
}

export { CountValoresUseCase };
