import { ICreateIgrejaDTO } from "../dtos/ICreateIgrejaDTO";
import { Igreja } from "../infra/typeorm/entities/Igreja";

interface IIgrejaRepository {
  create(data: ICreateIgrejaDTO): Promise<void>;
  update(data: ICreateIgrejaDTO): Promise<Igreja>;
  findById(id: string): Promise<Igreja>;
  findByName(nome_igreja: string): Promise<Igreja>;
  findByCNPJ(cnpj: string): Promise<Igreja>;
  list(): Promise<Igreja[]>;
  findUsuarioIgreja(id_usuario: string): Promise<Igreja>;
  delete(id_igreja: string): Promise<void>;
  findIgrejaMatriz(): Promise<Igreja>;
  isCountMembros(id_igreja?: string): Promise<void[]>;
}

export { IIgrejaRepository };
