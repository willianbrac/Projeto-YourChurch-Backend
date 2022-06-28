import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ITipoAtividadeRepository } from "../../repositories/ITipoAtividadeRepository";

interface IRequest {
  id: string;
}

@injectable()
class DeleteTipoAtividadeUseCase {
  constructor(
    @inject("TipoAtividadeRepository")
    private tipoAtividadeRepository: ITipoAtividadeRepository
  ) {}
  async execute({ id }: IRequest): Promise<void> {
    const tipoAtividadeExiste = await this.tipoAtividadeRepository.findByUniqueTipoAtividade(
      id
    );
    if (!tipoAtividadeExiste) {
      throw new AppError("O tipo de atividade não existe");
    }
    await this.tipoAtividadeRepository.delete(id);
  }
}

export { DeleteTipoAtividadeUseCase };
