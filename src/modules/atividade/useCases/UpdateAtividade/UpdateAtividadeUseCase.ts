import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IIgrejaRepository } from "../../../igreja/repositories/IIgrejaRepository";
import { ITipoAtividadeRepository } from "../../../tipoAtividade/repositories/ITipoAtividadeRepository";
import { Atividade } from "../../infra/typeorm/entities/Atividade";
import { IAtividadeRepository } from "../../repositories/IAtividadeRepository";

interface IRequest {
  id_atividade?: string;
  id_tipo_atividade: string;
  id_igreja: string;
  data_atividade: Date;
  hora_inicio_atividade: string;
  hora_termino_atividade: string;
  quantidade_visitantes_atividade: number;
  quantidade_membros_atividade: number;
  tema_atividade: string;
  responsavel_atividade: string;
  dizimo_atividade: number;
  oferta_atividade: number;
  num_reconciliacao_atividade: number;
  num_decisoes_atividade: number;
  preleitor_atividade: string;
  observacao_atividade: string;
}

@injectable()
class UpdateAtividadeUseCase {
  constructor(
    @inject("AtividadeRepository")
    private atividadeRepository: IAtividadeRepository,
    @inject("TipoAtividadeRepository")
    private tipoAtividadeRepository: ITipoAtividadeRepository,
    @inject("IgrejaRepository")
    private igrejaRepository: IIgrejaRepository
  ) {}
  async execute({
    id_atividade,
    id_tipo_atividade,
    id_igreja,
    data_atividade,
    hora_inicio_atividade,
    hora_termino_atividade,
    quantidade_visitantes_atividade,
    quantidade_membros_atividade,
    tema_atividade,
    responsavel_atividade,
    dizimo_atividade,
    oferta_atividade,
    num_reconciliacao_atividade,
    num_decisoes_atividade,
    preleitor_atividade,
    observacao_atividade,
  }: IRequest): Promise<void> {
    const atividade = await this.atividadeRepository.findById(id_atividade);
    const tipoatividade = await this.tipoAtividadeRepository.findById(
      id_tipo_atividade
    );
    const igreja = await this.igrejaRepository.findById(id_igreja);

    if (!atividade) {
      throw new AppError("A atividade informada não existe");
    }

    if (!tipoatividade) {
      throw new AppError("O tipo de atividade informada não existe");
    }

    if (!igreja) {
      throw new AppError("A igreja informada não existe");
    }

    atividade.id_tipo_atividade =
      id_tipo_atividade || atividade.id_tipo_atividade;

    atividade.id_igreja = id_igreja || atividade.id_igreja;
    atividade.data_atividade = data_atividade || atividade.data_atividade;

    atividade.hora_inicio_atividade =
      hora_inicio_atividade || atividade.hora_inicio_atividade;

    atividade.hora_termino_atividade =
      hora_termino_atividade || atividade.hora_termino_atividade;

    atividade.quantidade_visitantes_atividade =
      quantidade_visitantes_atividade ||
      atividade.quantidade_visitantes_atividade;

    atividade.quantidade_membros_atividade =
      quantidade_membros_atividade || atividade.quantidade_membros_atividade;

    atividade.tema_atividade = tema_atividade || atividade.tema_atividade;

    atividade.responsavel_atividade =
      responsavel_atividade || atividade.responsavel_atividade;

    atividade.dizimo_atividade = dizimo_atividade || atividade.dizimo_atividade;
    atividade.oferta_atividade = oferta_atividade || atividade.oferta_atividade;

    atividade.num_reconciliacao_atividade =
      num_reconciliacao_atividade || atividade.num_reconciliacao_atividade;

    atividade.num_decisoes_atividade =
      num_decisoes_atividade || atividade.num_decisoes_atividade;

    atividade.preleitor_atividade =
      preleitor_atividade || atividade.preleitor_atividade;

    atividade.observacao_atividade =
      observacao_atividade || atividade.observacao_atividade;

    await this.atividadeRepository.update(atividade);
  }
}

export { UpdateAtividadeUseCase };
