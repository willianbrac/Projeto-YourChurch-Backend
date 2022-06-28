import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICargoRepository } from "../../repositories/ICargoRepository";

interface IRequest {
  id: string;
}

@injectable()
class DeleteCargoUseCase {
  constructor(
    @inject("CargoRepository")
    private cargoRepository: ICargoRepository
  ) {}
  async execute({ id }: IRequest): Promise<void> {
    const idExiste = await this.cargoRepository.findByCargoId(id);

    if (!idExiste) {
      throw new AppError("O cargo informado não existe");
    }
    await this.cargoRepository.delete(id);
  }
}

export { DeleteCargoUseCase };
