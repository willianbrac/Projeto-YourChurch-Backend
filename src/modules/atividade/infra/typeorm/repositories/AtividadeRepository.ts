import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { getRepository, Repository } from "typeorm";

import { Igreja } from "../../../../igreja/infra/typeorm/entities/Igreja";
import { ICreateAtividadeDTO } from "../../../dtos/ICreateAtividadeDTO";
import { IAtividadeRepository } from "../../../repositories/IAtividadeRepository";
import { Atividade } from "../entities/Atividade";

dayjs.extend(utc);

class AtividadeRepository implements IAtividadeRepository {
  private repository: Repository<Atividade>;

  constructor() {
    this.repository = getRepository(Atividade);
  }

  async update({
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
  }: ICreateAtividadeDTO): Promise<Atividade> {
    const atividade = this.repository.create({
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
    });

    await this.repository.save(atividade);
    return atividade;
  }

  async create({
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
  }: ICreateAtividadeDTO): Promise<void> {
    const atividade = this.repository.create({
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
    });

    await this.repository.save(atividade);
  }

  async findById(id_atividade: string): Promise<Atividade> {
    const atividade = await this.repository.findOne(id_atividade, {
      relations: ["igreja", "tipoAtividade"],
    });
    return atividade;
  }

  async list(): Promise<Atividade[]> {
    const atividades = await this.repository.find({
      relations: ["igreja", "tipoAtividade"],
    });
    return atividades;
  }

  async delete(id_atividade: string): Promise<void> {
    await this.repository.delete(id_atividade);
  }

  async listAtividadesRelatorio(
    id_igreja: string,
    data_inicio?: string,
    data_final?: string,
    id_tipo_atividade?: string
  ): Promise<Atividade[]> {
    const mesAtual = new Date().getUTCMonth() + 1;

    const query = await this.repository
      .createQueryBuilder("a")
      .leftJoinAndSelect("a.igreja", "igreja")
      .leftJoinAndSelect("a.tipoAtividade", "tipo_atividade")
      .where("a.id_igreja = :id_igreja", { id_igreja });

    if (data_inicio || data_final) {
      query.andWhere("a.data_atividade >= :data_inicio", {
        data_inicio,
      });
      query.andWhere("a.data_atividade <= :data_final", {
        data_final,
      });
    }

    if (id_tipo_atividade) {
      query.andWhere("a.id_tipo_atividade = :id_tipo_atividade", {
        id_tipo_atividade,
      });
    }

    if (!(data_inicio || data_final)) {
      query.andWhere("MONTH(data_atividade) = :mesAtual", {
        mesAtual,
      });
      query.orderBy("data_atividade");
    }
    const atividades = await query.orderBy("data_atividade").getMany();
    return atividades;
  }

  async isCountAtividades(id_igreja?: string): Promise<number> {
    const mesAtual = new Date().getUTCMonth() + 1;
    const query = await this.repository
      .createQueryBuilder("a")
      .where("a.id_igreja = :id_igreja", { id_igreja })
      .andWhere("MONTH(a.data_atividade) = :mesAtual", { mesAtual });

    if (!id_igreja) {
      query.where("MONTH(a.data_atividade) = :mesAtual", { mesAtual });
    }

    const countAtividades = await query.orderBy("data_atividade").getCount();
    return countAtividades;
  }

  async isCountValues(id_igreja?: string): Promise<void[]> {
    const mesAtual = new Date().getUTCMonth() + 1;

    const query = await this.repository
      .createQueryBuilder("a")
      .select(
        "SUM(oferta_atividade + dizimo_atividade)",
        `soma_total_arrecadacao`
      )
      .where("a.id_igreja = :id_igreja", { id_igreja })
      .andWhere("MONTH(a.data_atividade) = :mesAtual", { mesAtual });

    if (!id_igreja) {
      query
        .select(
          "SUM(a.oferta_atividade + a.dizimo_atividade)",
          "soma_total_arrecadacao"
        )
        .where("MONTH(a.data_atividade) = :mesAtual", { mesAtual })
        .groupBy("MONTH(a.data_atividade)");
    }

    const atividades = await query.getRawOne();

    return atividades;
  }

  async isValuesGrafico(id_igreja?: string): Promise<void[]> {
    const queryRelatorio = await this.repository
      .createQueryBuilder("a")
      .select("COUNT(a.id_atividade )", "atividades")
      .addSelect("SUM(a.oferta_atividade + a.dizimo_atividade)", "total")
      .addSelect("MONTH(a.data_atividade)", "mes");

    if (id_igreja) {
      const grafico = await queryRelatorio
        .andWhere("a.id_igreja = :id_igreja", { id_igreja })
        .groupBy("MONTH(a.data_atividade)")
        .getRawMany();

      return grafico;
    }

    const grafico = await queryRelatorio
      .groupBy("MONTH(a.data_atividade)")
      .getRawMany();

    return grafico;
  }
}

export { AtividadeRepository };
