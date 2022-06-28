import { getManager, getRepository, Repository } from "typeorm";

import { ICreateUsuarioDTO } from "../../../dtos/ICreateUsuarioDTO";
import { IUsuarioRepository } from "../../../repositories/IUsuarioRepository";
import { Usuario } from "../entities/Usuario";

class UsuarioRepository implements IUsuarioRepository {
  private repository: Repository<Usuario>;

  constructor() {
    this.repository = getRepository(Usuario);
  }

  async update({
    primeiro_nome_usuario,
    ultimo_nome_usuario,
    email_usuario,
    senha_usuario,
    cpf_usuario,
    id_cargo,
    rua_usuario,
    bairro_usuario,
    cep_usuario,
    numero_residencia_usuario,
    complemento_residencia_usuario,
    cidade_usuario,
    estado_usuario,
    pais_usuario,
    foto_perfil_usuario,
    id_usuario,
  }: ICreateUsuarioDTO): Promise<Usuario> {
    const usuario = this.repository.create({
      id_usuario,
      primeiro_nome_usuario,
      ultimo_nome_usuario,
      email_usuario,
      senha_usuario,
      cpf_usuario,
      id_cargo,
      rua_usuario,
      bairro_usuario,
      cep_usuario,
      numero_residencia_usuario,
      complemento_residencia_usuario,
      cidade_usuario,
      estado_usuario,
      pais_usuario,
      foto_perfil_usuario,
    });

    await this.repository.save(usuario);
    return usuario;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
  async findById(id: string): Promise<Usuario> {
    const usuario = await this.repository.findOne(id, {
      relations: ["cargo", "igreja"],
    });
    return usuario;
  }

  async findByEmail(email_usuario: string): Promise<Usuario> {
    const emailUsuarioExiste = await this.repository.findOne({
      where: { email_usuario },
    });
    return emailUsuarioExiste;
  }

  async findByPrimaryName(primeiro_nome_usuario: string): Promise<Usuario> {
    const primeiroNomeExiste = await this.repository.findOne({
      where: { primeiro_nome_usuario },
    });
    return primeiroNomeExiste;
  }

  async findByLastName(ultimo_nome_usuario: string): Promise<Usuario> {
    const ultimoNomeUsuarioExiste = await this.repository.findOne({
      where: { ultimo_nome_usuario },
    });
    return ultimoNomeUsuarioExiste;
  }

  async findByCpf(cpf_usuario: string): Promise<Usuario> {
    const CpfUsuarioExiste = await this.repository.findOne({
      where: { cpf_usuario },
    });
    return CpfUsuarioExiste;
  }

  async create({
    primeiro_nome_usuario,
    ultimo_nome_usuario,
    email_usuario,
    senha_usuario,
    cpf_usuario,
    id_cargo,
    rua_usuario,
    bairro_usuario,
    cep_usuario,
    numero_residencia_usuario,
    complemento_residencia_usuario,
    cidade_usuario,
    estado_usuario,
    pais_usuario,
    foto_perfil_usuario,
    id_usuario,
  }: ICreateUsuarioDTO): Promise<void> {
    const usuario = this.repository.create({
      primeiro_nome_usuario,
      ultimo_nome_usuario,
      email_usuario,
      senha_usuario,
      cpf_usuario,
      id_cargo,
      rua_usuario,
      bairro_usuario,
      cep_usuario,
      numero_residencia_usuario,
      complemento_residencia_usuario,
      cidade_usuario,
      estado_usuario,
      pais_usuario,
      foto_perfil_usuario,
      id_usuario,
    });

    await this.repository.save(usuario);
  }

  async list(): Promise<Usuario[]> {
    const todosUsuarios = await this.repository.find({
      relations: ["cargo", "igreja"],
    });
    return todosUsuarios;
  }
}

export { UsuarioRepository };
