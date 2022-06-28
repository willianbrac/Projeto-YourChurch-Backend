import { inject, injectable } from "tsyringe";

import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { Atividade } from "../../infra/typeorm/entities/Atividade";
import { IAtividadeRepository } from "../../repositories/IAtividadeRepository";

interface IRequest {
  id_igreja: string;
  data_inicio?: string;
  data_final?: string;
  id_tipo_atividade?: string;
}

@injectable()
class RelatorioAtividadesUseCase {
  constructor(
    @inject("AtividadeRepository")
    private atividadeRepository: IAtividadeRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}
  async execute({
    id_igreja,
    data_inicio,
    data_final,
    id_tipo_atividade,
  }: IRequest): Promise<Atividade[]> {
    if (data_final < data_inicio) {
      throw new AppError("A data de inicio informada e maior que a data final");
    }

    const atividades = await this.atividadeRepository.listAtividadesRelatorio(
      id_igreja,
      data_inicio,
      data_final,
      id_tipo_atividade
    );

    return atividades;
  }
}

export { RelatorioAtividadesUseCase };
