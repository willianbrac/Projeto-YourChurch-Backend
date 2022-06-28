import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { INivelAcessoRepository } from "../../../nivelAcesso/repositories/INivelAcessoRepository";
import { ICargoRepository } from "../../repositories/ICargoRepository";

interface IRequest {
  id_cargo: string;
  nome_cargo: string;
  descricao: string;
  id_nivel_acesso: string;
}

interface IResponse {
  cargo: {
    id_cargo: string;
    nome_cargo: string;
    descricao: string;
    nivelAcesso: {
      id_nivel_acesso: string;
      titulo_nivel_acesso: string;
      tipo_nivel_acesso: number;
      descricao: string;
    };
  };
}

@injectable()
class UpdateCargoUseCase {
  constructor(
    @inject("CargoRepository")
    private cargoRepository: ICargoRepository,
    @inject("NivelAcessoRepository")
    private nivelAcessoRepository: INivelAcessoRepository
  ) {}
  async execute({
    id_cargo,
    nome_cargo,
    descricao,
    id_nivel_acesso,
  }: IRequest): Promise<IResponse> {
    const cargo = await this.cargoRepository.findByCargoId(id_cargo);
    if (!cargo) {
      throw new AppError("O cargo informado não existe");
    }
    const nivelacesso = await this.nivelAcessoRepository.listUniqueNivelAcesso(
      id_nivel_acesso
    );
    if (!nivelacesso) {
      throw new AppError("O nivel de acesso informado não existe");
    }
    cargo.nome_cargo = nome_cargo || cargo.nome_cargo;
    cargo.descricao = descricao || cargo.descricao;
    cargo.id_nivel_acesso = id_nivel_acesso || cargo.id_nivel_acesso;

    const updatedCargo = await this.cargoRepository.update(cargo);
    const cargoReturn: IResponse = {
      cargo: {
        id_cargo: updatedCargo.id_cargo,
        nome_cargo: updatedCargo.nome_cargo,
        descricao: updatedCargo.descricao,
        nivelAcesso: {
          id_nivel_acesso: updatedCargo.id_nivel_acesso,
          titulo_nivel_acesso: nivelacesso.titulo_nivel_acesso,
          descricao: nivelacesso.descricao,
          tipo_nivel_acesso: nivelacesso.tipo_nivel_acesso,
        },
      },
    };
    return cargoReturn;
  }
}

export { UpdateCargoUseCase };
