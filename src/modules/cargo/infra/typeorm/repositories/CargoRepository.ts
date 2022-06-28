import { getConnection, getManager, getRepository, Repository } from "typeorm";

import {
  ICargoRepository,
  ICreateCargoDTO,
} from "../../../repositories/ICargoRepository";
import { Cargo } from "../entities/Cargo";

class CargoRepository implements ICargoRepository {
  private repository: Repository<Cargo>;
  private getManager = getManager();

  constructor() {
    this.repository = getRepository(Cargo);
    this.getManager = getManager();
  }

  async findByNameCargo(nome_cargo: string): Promise<Cargo> {
    const cargoExiste = await this.repository.findOne({ nome_cargo });
    return cargoExiste;
  }

  async create({
    id_cargo,
    nome_cargo,
    descricao,
    id_nivel_acesso,
  }: ICreateCargoDTO): Promise<void> {
    const cargo = this.repository.create({
      id_cargo,
      nome_cargo,
      descricao,
      id_nivel_acesso,
    });

    await this.repository.save(cargo);
  }

  async update({
    id_cargo,
    nome_cargo,
    descricao,
    id_nivel_acesso,
  }: ICreateCargoDTO): Promise<Cargo> {
    const cargo = this.repository.create({
      id_cargo,
      nome_cargo,
      descricao,
      id_nivel_acesso,
    });
    await this.repository.save(cargo);
    return cargo;
  }

  async list(): Promise<Cargo[]> {
    const cargo = await this.getManager.find(Cargo, {
      relations: ["nivelAcesso"],
    });

    return cargo;
  }

  async findByCargoId(id_cargo: string): Promise<Cargo> {
    const cargo = await this.repository.findOne(id_cargo);
    return cargo;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { CargoRepository };
