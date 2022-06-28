import { inject, injectable } from "tsyringe";

import { TipoAtividade } from "../../infra/typeorm/entities/TipoAtividade";
import { ITipoAtividadeRepository } from "../../repositories/ITipoAtividadeRepository";

@injectable()
class ListTipoAtividadeUseCase {
  constructor(
    @inject("TipoAtividadeRepository")
    private tipoAtividadeRepository: ITipoAtividadeRepository
  ) {}
  execute(): Promise<TipoAtividade[]> {
    const todosNiveisAcesso = this.tipoAtividadeRepository.list();

    return todosNiveisAcesso;
  }
}

export { ListTipoAtividadeUseCase };
