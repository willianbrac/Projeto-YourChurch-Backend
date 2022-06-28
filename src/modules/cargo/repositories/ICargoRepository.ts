import { NivelAcesso } from "../../nivelAcesso/infra/typeorm/entities/NivelAcesso";
import { Cargo } from "../infra/typeorm/entities/Cargo";

interface ICreateCargoDTO {
  id_cargo?: string;
  nome_cargo: string;
  descricao: string;
  id_nivel_acesso: string;
}
interface ICargoRepository {
  create({
    nome_cargo,
    descricao,
    id_nivel_acesso,
  }: ICreateCargoDTO): Promise<void>;

  update({
    id_cargo,
    nome_cargo,
    descricao,
    id_nivel_acesso,
  }: ICreateCargoDTO): Promise<Cargo>;

  findByNameCargo(nome_cargo: string): Promise<Cargo>;
  list(): Promise<Cargo[]>;
  findByCargoId(id_cargo: string): Promise<Cargo>;
  delete(id: string): Promise<void>;
}

export { ICargoRepository, ICreateCargoDTO };
