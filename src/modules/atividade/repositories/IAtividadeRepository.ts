import { ICreateAtividadeDTO } from "../dtos/ICreateAtividadeDTO";
import { Atividade } from "../infra/typeorm/entities/Atividade";

interface IAtividadeRepository {
  create(data: ICreateAtividadeDTO): Promise<void>;
  update(data: ICreateAtividadeDTO): Promise<Atividade>;
  findById(id_atividade: string): Promise<Atividade>;
  list(): Promise<Atividade[]>;
  delete(id_atividade: string): Promise<void>;
  listAtividadesRelatorio(
    id_igreja: string,
    data_inicio?: string,
    data_final?: string,
    id_tipo_atividade?: string
  ): Promise<Atividade[]>;

  isCountAtividades(id_igreja?: string): Promise<number>;
  isCountValues(id_igreja?: string): Promise<void[]>;
  isValuesGrafico(id_igreja?: string): Promise<void[]>;
}

export { IAtividadeRepository };
