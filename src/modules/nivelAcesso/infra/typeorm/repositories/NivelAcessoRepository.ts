import { getManager, getRepository, Repository } from "typeorm";

import { Cargo } from "../../../../cargo/infra/typeorm/entities/Cargo";
import {
  ICreateNivelAcessoDTO,
  INivelAcessoRepository,
} from "../../../repositories/INivelAcessoRepository";
import { NivelAcesso } from "../entities/NivelAcesso";

class NivelAcessoRepository implements INivelAcessoRepository {
  private repository: Repository<NivelAcesso>;
  private getManager = getManager();

  constructor() {
    this.repository = getRepository(NivelAcesso);
    this.getManager = getManager();
  }

  // async listCargos(id: string): Promise<Cargo[]> {
  //   const nivelacesso = await getManager().findOne(NivelAcesso, id, {
  //     relations: ["cargos"],
  //   });

  //   return nivelacesso.cargos;
  // }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
  async listUniqueNivelAcesso(id: string): Promise<NivelAcesso> {
    const uniqueNivelAcessoExiste = await this.repository.findOne(id);
    return uniqueNivelAcessoExiste;
  }

  async findByTipoAcesso(tipo_nivel_acesso: number): Promise<NivelAcesso> {
    const tipoAcessoExiste = await this.repository.findOne({
      tipo_nivel_acesso,
    });
    return tipoAcessoExiste;
  }

  async create({
    titulo_nivel_acesso,
    tipo_nivel_acesso,
    descricao,
  }: ICreateNivelAcessoDTO): Promise<void> {
    const nivelacesso = this.repository.create({
      titulo_nivel_acesso,
      tipo_nivel_acesso,
      descricao,
    });

    await this.repository.save(nivelacesso);
  }

  async update({
    id_nivel_acesso,
    titulo_nivel_acesso,
    tipo_nivel_acesso,
    descricao,
  }: ICreateNivelAcessoDTO): Promise<NivelAcesso> {
    const nivelacesso = this.repository.create({
      id_nivel_acesso,
      titulo_nivel_acesso,
      tipo_nivel_acesso,
      descricao,
    });
    await this.repository.save(nivelacesso);
    return nivelacesso;
  }

  async list(): Promise<NivelAcesso[]> {
    const nivelacesso = await this.repository.find();
    return nivelacesso;
  }

  async findByName(titulo_nivel_acesso: string): Promise<NivelAcesso> {
    const nivelacesso = await this.repository.findOne({
      where: { titulo_nivel_acesso },
    });
    return nivelacesso;
  }
}

export { NivelAcessoRepository };
