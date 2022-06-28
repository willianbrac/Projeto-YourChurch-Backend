import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUsuarioRepository } from "../../../accounts/repositories/IUsuarioRepository";
import { Igreja } from "../../infra/typeorm/entities/Igreja";
import { IIgrejaRepository } from "../../repositories/IIgrejaRepository";

interface IRequest {
  id_usuario: string;
}

@injectable()
class VerifyIgrejaMatrizUseCase {
  constructor(
    @inject("IgrejaRepository")
    private igrejaRepository: IIgrejaRepository,
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository
  ) {}
  async execute({ id_usuario }: IRequest): Promise<Igreja> {
    const usuario = await this.usuarioRepository.findById(id_usuario);

    if (!usuario) {
      throw new AppError("O usuario informado nao existe");
    }

    const findIgreja = await this.igrejaRepository.findIgrejaMatriz();
    return findIgreja;
  }
}

export { VerifyIgrejaMatrizUseCase };
