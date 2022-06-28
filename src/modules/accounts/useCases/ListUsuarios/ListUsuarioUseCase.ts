import { inject, injectable } from "tsyringe";

import { Usuario } from "../../infra/typeorm/entities/Usuario";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";

@injectable()
class ListUsuarioUseCase {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository
  ) {}
  async execute(): Promise<Usuario[]> {
    const allUsuarios = await this.usuarioRepository.list();
    return allUsuarios;
  }
}

export { ListUsuarioUseCase };
