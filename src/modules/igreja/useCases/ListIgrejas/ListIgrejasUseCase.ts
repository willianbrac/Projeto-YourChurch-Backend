import { inject, injectable } from "tsyringe";

import { Igreja } from "../../infra/typeorm/entities/Igreja";
import { IIgrejaRepository } from "../../repositories/IIgrejaRepository";

@injectable()
class ListIgrejasUseCase {
  constructor(
    @inject("IgrejaRepository")
    private igrejaRepository: IIgrejaRepository
  ) {}
  async execute(): Promise<Igreja[]> {
    const igrejas = await this.igrejaRepository.list();
    return igrejas;
  }
}

export { ListIgrejasUseCase };
