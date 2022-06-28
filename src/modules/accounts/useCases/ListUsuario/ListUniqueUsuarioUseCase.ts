import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Usuario } from "../../infra/typeorm/entities/Usuario";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";

interface IRequest {
  id: string;
}

@injectable()
class ListUniqueUsuarioUseCase {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository
  ) {}
  async execute({ id }: IRequest): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findById(id);

    if (!usuario) {
      throw new AppError("O usuario não existe");
    }

    return usuario;
  }
}

export { ListUniqueUsuarioUseCase };
