import { getRepository, Repository } from "typeorm";

import {
  ICreateTipoAtividadedDTO,
  ITipoAtividadeRepository,
} from "../../../repositories/ITipoAtividadeRepository";
import { TipoAtividade } from "../entities/TipoAtividade";

class TipoAtividadeRepository implements ITipoAtividadeRepository {
  private repository: Repository<TipoAtividade>;

  constructor() {
    this.repository = getRepository(TipoAtividade);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
  async findById(id: string): Promise<TipoAtividade> {
    const tipoAtividade = await this.repository.findOne(id, {
      relations: ["atividades"],
    });
    return tipoAtividade;
  }
  async findByModalidade(
    modalidade_tipo_atividade: string
  ): Promise<TipoAtividade> {
    const tipoModalidadeExiste = await this.repository.findOne({
      modalidade_tipo_atividade,
    });
    return tipoModalidadeExiste;
  }

  async create({
    nome_tipo_atividade,
    modalidade_tipo_atividade,
    gera_arrecadacao_tipo_atividade,
    descricao,
  }: ICreateTipoAtividadedDTO): Promise<void> {
    const tipoatividde = this.repository.create({
      nome_tipo_atividade,
      modalidade_tipo_atividade,
      gera_arrecadacao_tipo_atividade,
      descricao,
    });

    await this.repository.save(tipoatividde);
  }

  async update({
    id_tipo_atividade,
    nome_tipo_atividade,
    modalidade_tipo_atividade,
    gera_arrecadacao_tipo_atividade,
    descricao,
  }: ICreateTipoAtividadedDTO): Promise<TipoAtividade> {
    const tipoatividade = this.repository.create({
      id_tipo_atividade,
      nome_tipo_atividade,
      modalidade_tipo_atividade,
      gera_arrecadacao_tipo_atividade,
      descricao,
    });
    await this.repository.save(tipoatividade);
    return tipoatividade;
  }

  async findByName(nome_tipo_atividade: string): Promise<TipoAtividade> {
    const tipoatividade = await this.repository.findOne({
      where: { nome_tipo_atividade },
    });
    return tipoatividade;
  }

  async list(): Promise<TipoAtividade[]> {
    const tipoatividadde = await this.repository.find({
      relations: ["atividades"],
    });

    return tipoatividadde;
  }
}

export { TipoAtividadeRepository };
