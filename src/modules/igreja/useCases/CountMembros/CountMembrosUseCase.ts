import { inject, injectable } from "tsyringe";

import { IIgrejaRepository } from "../../repositories/IIgrejaRepository";

@injectable()
class CountMembrosUseCase {
  constructor(
    @inject("IgrejaRepository")
    private igrejaRepository: IIgrejaRepository
  ) {}
  async execute(id_igreja: string): Promise<number> {
    const membros = await this.igrejaRepository.isCountMembros(id_igreja);
    return membros;
  }
}

export { CountMembrosUseCase };
