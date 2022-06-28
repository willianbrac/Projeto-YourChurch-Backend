import { inject, injectable } from "tsyringe";

import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
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
  dizimo_atividade?: number;
  oferta_atividade?: number;
  num_reconciliacao_atividade: number;
  num_decisoes_atividade: number;
  preleitor_atividade: string;
  observacao_atividade: string;
}

@injectable()
class CreateAtividadeUseCase {
  constructor(
    @inject("AtividadeRepository")
    private atividadeRepository: IAtividadeRepository,
    @inject("TipoAtividadeRepository")
    private tipoAtividadeRepository: ITipoAtividadeRepository,
    @inject("IgrejaRepository")
    private igrejaRepository: IIgrejaRepository
  ) {}
  async execute({
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
    const tipoatividade = await this.tipoAtividadeRepository.findById(
      id_tipo_atividade
    );

    const igreja = await this.igrejaRepository.findById(id_igreja);

    if (!tipoatividade) {
      throw new AppError("O tipo de atividade não existe");
    }

    if (!igreja) {
      throw new AppError("A igreja informada não existe");
    }

    await this.atividadeRepository.create({
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
    });
  }
}

export { CreateAtividadeUseCase };
