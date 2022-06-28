import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IIgrejaRepository } from "../../repositories/IIgrejaRepository";

interface IRequest {
  id_igreja: string;
}

@injectable()
class DeleteIgrejaUseCase {
  constructor(
    @inject("IgrejaRepository")
    private igrejaRepository: IIgrejaRepository
  ) {}
  async execute({ id_igreja }: IRequest): Promise<void> {
    const igreja = await this.igrejaRepository.findById(id_igreja);

    if (!igreja) {
      throw new AppError("A igreja informada nao existe");
    }

    await this.igrejaRepository.delete(id_igreja);
  }
}

export { DeleteIgrejaUseCase };
