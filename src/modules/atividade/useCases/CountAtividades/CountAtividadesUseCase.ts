import { inject, injectable } from "tsyringe";

import { IAtividadeRepository } from "../../repositories/IAtividadeRepository";

@injectable()
class CountAtividadesUseCase {
  constructor(
    @inject("AtividadeRepository")
    private atividadeRepository: IAtividadeRepository
  ) {}
  async execute(id_igreja: string): Promise<number> {
    const atividades = await this.atividadeRepository.isCountAtividades(
      id_igreja
    );
    return atividades;
  }
}

export { CountAtividadesUseCase };
