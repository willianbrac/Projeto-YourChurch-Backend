import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IAtividadeRepository } from "../../repositories/IAtividadeRepository";

interface IRequest {
  id_atividade: string;
}

@injectable()
class DeleteAtividadeUseCase {
  constructor(
    @inject("AtividadeRepository")
    private atividadeRepository: IAtividadeRepository
  ) {}
  async execute({ id_atividade }: IRequest): Promise<void> {
    const atividade = await this.atividadeRepository.findById(id_atividade);

    if (!atividade) {
      throw new AppError("A atividaded informada nao foi encontrada");
    }
    await this.atividadeRepository.delete(id_atividade);
  }
}

export { DeleteAtividadeUseCase };
