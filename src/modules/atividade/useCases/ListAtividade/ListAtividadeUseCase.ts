import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Atividade } from "../../infra/typeorm/entities/Atividade";
import { IAtividadeRepository } from "../../repositories/IAtividadeRepository";

interface IRequest {
  id_atividade: string;
}

@injectable()
class ListAtividadeUseCase {
  constructor(
    @inject("AtividadeRepository")
    private atividadeRepository: IAtividadeRepository
  ) {}

  async execute({ id_atividade }: IRequest): Promise<Atividade> {
    const atividade = await this.atividadeRepository.findById(id_atividade);

    if (!atividade) {
      throw new AppError("A Atividade informada nao foi encontrada");
    }

    return atividade;
  }
}

export { ListAtividadeUseCase };
