import { TipoAtividade } from "../infra/typeorm/entities/TipoAtividade";

interface ICreateTipoAtividadedDTO {
  id_tipo_atividade?: string;
  nome_tipo_atividade: string;
  modalidade_tipo_atividade: string;
  gera_arrecadacao_tipo_atividade: boolean;
  descricao: string;
}
interface ITipoAtividadeRepository {
  create({
    nome_tipo_atividade,
    modalidade_tipo_atividade,
    gera_arrecadacao_tipo_atividade,
    descricao,
  }: ICreateTipoAtividadedDTO): Promise<void>;

  update({
    id_tipo_atividade,
    nome_tipo_atividade,
    modalidade_tipo_atividade,
    gera_arrecadacao_tipo_atividade,
    descricao,
  }: ICreateTipoAtividadedDTO): Promise<TipoAtividade>;

  findByName(nome_tipo_atividade: string): Promise<TipoAtividade>;
  findById(id: string): Promise<TipoAtividade>;
  delete(id: string): Promise<void>;
  findByModalidade(modalidade_tipo_atividade: string): Promise<TipoAtividade>;

  list(): Promise<TipoAtividade[]>;
}

export { ITipoAtividadeRepository, ICreateTipoAtividadedDTO };
