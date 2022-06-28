import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { TipoAtividade } from "../../infra/typeorm/entities/TipoAtividade";
import { ITipoAtividadeRepository } from "../../repositories/ITipoAtividadeRepository";

@injectable()
class ListUniqueTipoAtividadeUseCase {
  constructor(
    @inject("TipoAtividadeRepository")
    private tipoAtividadeRepository: ITipoAtividadeRepository
  ) {}

  async execute(id: string): Promise<TipoAtividade> {
    const tipoAtividade = await this.tipoAtividadeRepository.findById(id);

    if (!tipoAtividade) {
      throw new AppError("O tipo de atividade informado não existe");
    }

    return tipoAtividade;
  }
}

export { ListUniqueTipoAtividadeUseCase };
