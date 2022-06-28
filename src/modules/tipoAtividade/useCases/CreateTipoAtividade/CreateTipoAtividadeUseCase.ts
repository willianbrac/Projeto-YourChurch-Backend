import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ITipoAtividadeRepository } from "../../repositories/ITipoAtividadeRepository";

interface IRequest {
  nome_tipo_atividade: string;
  modalidade_tipo_atividade: string;
  gera_arrecadacao_tipo_atividade: boolean;
  descricao: string;
}

@injectable()
class CreateTipoAtividadeUseCase {
  constructor(
    @inject("TipoAtividadeRepository")
    private tipoAtividadeRepository: ITipoAtividadeRepository
  ) {}

  async execute({
    nome_tipo_atividade,
    modalidade_tipo_atividade,
    gera_arrecadacao_tipo_atividade,
    descricao,
  }: IRequest): Promise<void> {
    const nomeTipoAtividadeExiste = await this.tipoAtividadeRepository.findByName(
      nome_tipo_atividade
    );

    if (nomeTipoAtividadeExiste) {
      throw new AppError("O nome tipo de atividade já existe");
    }

    const tipoModalidadeExiste = await this.tipoAtividadeRepository.findByModalidade(
      modalidade_tipo_atividade
    );

    if (tipoModalidadeExiste) {
      throw new AppError("A modalidade do tipo de atividade já existe");
    }

    await this.tipoAtividadeRepository.create({
      nome_tipo_atividade,
      modalidade_tipo_atividade,
      gera_arrecadacao_tipo_atividade,
      descricao,
    });
  }
}

export { CreateTipoAtividadeUseCase };
