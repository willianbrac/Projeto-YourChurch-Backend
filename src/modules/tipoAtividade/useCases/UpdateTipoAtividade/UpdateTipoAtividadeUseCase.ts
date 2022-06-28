import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ITipoAtividadeRepository } from "../../repositories/ITipoAtividadeRepository";

interface IRequest {
  id_tipo_atividade: string;
  nome_tipo_atividade: string;
  modalidade_tipo_atividade: string;
  gera_arrecadacao_tipo_atividade: boolean;
  descricao: string;
}

interface IResponse {
  id_tipo_atividade: string;
  nome_tipo_atividade: string;
  modalidade_tipo_atividade: string;
  gera_arrecadacao_tipo_atividade: boolean;
  descricao: string;
}

@injectable()
class UpdateTipoAtividadeUseCase {
  constructor(
    @inject("TipoAtividadeRepository")
    private tipoAtividadeRepository: ITipoAtividadeRepository
  ) {}

  async execute({
    id_tipo_atividade,
    nome_tipo_atividade,
    modalidade_tipo_atividade,
    gera_arrecadacao_tipo_atividade,
    descricao,
  }: IRequest): Promise<IResponse> {
    const tipoatividade = await this.tipoAtividadeRepository.findById(
      id_tipo_atividade
    );
    if (!tipoatividade) {
      throw new AppError("O tipo de atividade informado nao existe");
    }

    tipoatividade.nome_tipo_atividade =
      nome_tipo_atividade || tipoatividade.nome_tipo_atividade;

    tipoatividade.modalidade_tipo_atividade =
      modalidade_tipo_atividade || tipoatividade.modalidade_tipo_atividade;

    tipoatividade.descricao = descricao || tipoatividade.descricao;

    tipoatividade.gera_arrecadacao_tipo_atividade =
      gera_arrecadacao_tipo_atividade ||
      tipoatividade.gera_arrecadacao_tipo_atividade;

    const updateTipoAtividade = await this.tipoAtividadeRepository.update(
      tipoatividade
    );

    const returnTipoAtividade: IResponse = {
      id_tipo_atividade: updateTipoAtividade.id_tipo_atividade,
      nome_tipo_atividade: updateTipoAtividade.nome_tipo_atividade,
      modalidade_tipo_atividade: updateTipoAtividade.modalidade_tipo_atividade,
      gera_arrecadacao_tipo_atividade:
        updateTipoAtividade.gera_arrecadacao_tipo_atividade,
      descricao: updateTipoAtividade.descricao,
    };

    return returnTipoAtividade;
  }
}

export { UpdateTipoAtividadeUseCase };
