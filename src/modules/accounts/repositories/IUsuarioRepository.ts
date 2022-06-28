import { ICreateUsuarioDTO } from "../dtos/ICreateUsuarioDTO";
import { IUpdateUsuarioDTO } from "../dtos/IUpdateUsuarioDTO";
import { Usuario } from "../infra/typeorm/entities/Usuario";

interface IUsuarioRepository {
  create(data: ICreateUsuarioDTO): Promise<void>;
  update(data: IUpdateUsuarioDTO): Promise<Usuario>;

  list(): Promise<Usuario[]>;

  findByPrimaryName(primeiro_nome_usuario: string): Promise<Usuario>;

  findByEmail(email_usuario: string): Promise<Usuario>;

  findByLastName(ultimo_nome_usuario: string): Promise<Usuario>;

  findByCpf(cpf_usuario: string): Promise<Usuario>;

  findById(id: string): Promise<Usuario>;

  delete(id: string): Promise<void>;
}

export { IUsuarioRepository };
