import { inject, injectable } from "tsyringe";

import { IAtividadeRepository } from "../../repositories/IAtividadeRepository";

@injectable()
class ValuesRelatorioUseCase {
  constructor(
    @inject("AtividadeRepository")
    private atividadeRepository: IAtividadeRepository
  ) {}
  async execute(id_igreja?: string): Promise<void[]> {
    const relatorio = await this.atividadeRepository.isValuesGrafico(id_igreja);

    return relatorio;
  }
}

export { ValuesRelatorioUseCase };
