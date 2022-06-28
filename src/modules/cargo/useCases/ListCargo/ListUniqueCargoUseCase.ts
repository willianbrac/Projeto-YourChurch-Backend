import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Cargo } from "../../infra/typeorm/entities/Cargo";
import { ICargoRepository } from "../../repositories/ICargoRepository";

interface IRequest {
  id: string;
}

@injectable()
class ListUniqueCargoUseCase {
  constructor(
    @inject("CargoRepository")
    private cargoRepository: ICargoRepository
  ) {}
  async execute({ id }: IRequest): Promise<Cargo> {
    const cargoUnico = await this.cargoRepository.findByCargoId(id);

    if (!cargoUnico) {
      throw new AppError("O cargo informado não existe");
    }

    return cargoUnico;
  }
}

export { ListUniqueCargoUseCase };
