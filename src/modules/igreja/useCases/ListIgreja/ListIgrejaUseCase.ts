import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Igreja } from "../../infra/typeorm/entities/Igreja";
import { IIgrejaRepository } from "../../repositories/IIgrejaRepository";

interface IRequest {
  id_igreja: string;
}

@injectable()
class ListIgrejaUseCase {
  constructor(
    @inject("IgrejaRepository")
    private igrejaRepository: IIgrejaRepository
  ) {}
  async execute({ id_igreja }: IRequest): Promise<Igreja> {
    const igreja = await this.igrejaRepository.findById(id_igreja);

    if (!igreja) {
      throw new AppError("A igreja informada nao existe");
    }
    return igreja;
  }
}

export { ListIgrejaUseCase };
