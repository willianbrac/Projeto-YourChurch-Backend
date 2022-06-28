import { getRepository, Repository } from "typeorm";

import { ICreateIgrejaDTO } from "../../../dtos/ICreateIgrejaDTO";
import { IIgrejaRepository } from "../../../repositories/IIgrejaRepository";
import { Igreja } from "../entities/Igreja";

class IgrejaRepository implements IIgrejaRepository {
  private repository: Repository<Igreja>;

  constructor() {
    this.repository = getRepository(Igreja);
  }
  async isCountMembros(id_igreja?: string): Promise<void[]> {
    const mesAtual = new Date().getUTCMonth() + 1;

    const membros = await this.repository
      .createQueryBuilder("i")
      .select("i.quantidade_membro_igreja", `total`)
      .where("i.id_igreja = :id_igreja", { id_igreja });

    if (!id_igreja) {
      membros
        .select("SUM(i.quantidade_membro_igreja)", `total`)
        .where("MONTH(i.created_at) = :mesAtual", { mesAtual });
    }
    const list = await membros.groupBy("MONTH(i.created_at)").getRawOne();

    return list;
  }

  async update({
    id_igreja,
    nome_igreja,
    cnpj_igreja,
    logo_igreja,
    isMatriz,
    quantidade_membro_igreja,
    rua_igreja,
    bairro_igreja,
    cep_igreja,
    numero_residencia_igreja,
    complemento_residencia_igreja,
    id_usuario,
    cidade_igreja,
    estado_igreja,
    pais_igreja,
    id_igreja_matriz,
  }: ICreateIgrejaDTO): Promise<Igreja> {
    const igreja = this.repository.create({
      id_igreja,
      nome_igreja,
      cnpj_igreja,
      logo_igreja,
      isMatriz,
      quantidade_membro_igreja,
      rua_igreja,
      bairro_igreja,
      cep_igreja,
      numero_residencia_igreja,
      complemento_residencia_igreja,
      id_usuario,
      cidade_igreja,
      estado_igreja,
      pais_igreja,
      id_igreja_matriz,
    });

    await this.repository.save(igreja);
    return igreja;
  }

  async create({
    id_igreja,
    nome_igreja,
    cnpj_igreja,
    logo_igreja,
    isMatriz,
    quantidade_membro_igreja,
    rua_igreja,
    bairro_igreja,
    cep_igreja,
    numero_residencia_igreja,
    complemento_residencia_igreja,
    id_usuario,
    cidade_igreja,
    estado_igreja,
    pais_igreja,
    id_igreja_matriz,
  }: ICreateIgrejaDTO): Promise<void> {
    const igreja = this.repository.create({
      id_igreja,
      nome_igreja,
      cnpj_igreja,
      logo_igreja,
      isMatriz,
      quantidade_membro_igreja,
      rua_igreja,
      bairro_igreja,
      cep_igreja,
      numero_residencia_igreja,
      complemento_residencia_igreja,
      id_usuario,
      cidade_igreja,
      estado_igreja,
      pais_igreja,
      id_igreja_matriz,
    });
    await this.repository.save(igreja);
  }

  async findById(id: string): Promise<Igreja> {
    const igreja = await this.repository.findOne(id, {
      relations: ["usuario"],
    });
    return igreja;
  }

  async findByName(nome_igreja: string): Promise<Igreja> {
    const nomeIgreja = await this.repository.findOne({ nome_igreja });
    return nomeIgreja;
  }

  async findByCNPJ(cnpj: string): Promise<Igreja> {
    const cnpjIgreja = await this.repository.findOne(cnpj);
    return cnpjIgreja;
  }

  async list(): Promise<Igreja[]> {
    const igrejas = this.repository.find({
      relations: ["usuario"],
    });
    return igrejas;
  }

  async findUsuarioIgreja(id_usuario: string): Promise<Igreja> {
    const igreja = await this.repository.findOne({ id_usuario });
    return igreja;
    // const queryIgreja = await this.repository
    //   .createQueryBuilder()
    //   .select("igreja")
    //   .from(Igreja, "igreja")
    //   .where("igreja.id_usuario = :id_usuario", { id_usuario })
    //   .getOne();

    // return queryIgreja;
  }

  async delete(id_igreja: string): Promise<void> {
    await this.repository.delete(id_igreja);
  }

  async findIgrejaMatriz(): Promise<Igreja> {
    const igreja = await this.repository.findOne({ isMatriz: true });
    return igreja;
  }
}

export { IgrejaRepository };
