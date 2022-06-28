import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { INivelAcessoRepository } from "../../../nivelAcesso/repositories/INivelAcessoRepository";
import { ICargoRepository } from "../../repositories/ICargoRepository";

interface IRequest {
  nome_cargo: string;
  descricao: string;
  id_nivel_acesso: string;
}

@injectable()
class CreateCargoUseCase {
  constructor(
    @inject("CargoRepository")
    private cargoRepository: ICargoRepository,
    @inject("NivelAcessoRepository")
    private nivelAcessoRepository: INivelAcessoRepository
  ) {}

  async execute({
    nome_cargo,
    descricao,
    id_nivel_acesso,
  }: IRequest): Promise<void> {
    const cargo = await this.cargoRepository.findByNameCargo(nome_cargo);
    const nivelacesso = await this.nivelAcessoRepository.listUniqueNivelAcesso(
      id_nivel_acesso
    );

    if (cargo) {
      throw new AppError("O nome do Cargo informado já existe");
    }

    if (!nivelacesso) {
      throw new AppError("O nivel de acesso informado não existe");
    }

    await this.cargoRepository.create({
      nome_cargo,
      descricao,
      id_nivel_acesso,
    });
  }
}

export { CreateCargoUseCase };
