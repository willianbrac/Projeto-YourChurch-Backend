import { inject, injectable } from "tsyringe";

import { Cargo } from "../../infra/typeorm/entities/Cargo";
import { ICargoRepository } from "../../repositories/ICargoRepository";

@injectable()
class ListCargoUseCase {
  constructor(
    @inject("CargoRepository")
    private cargoRepository: ICargoRepository
  ) {}
  async execute(): Promise<Cargo[]> {
    const allCargos = await this.cargoRepository.list();
    return allCargos;
  }
}

export { ListCargoUseCase };
