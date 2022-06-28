import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";

interface IRequest {
  id: string;
}

@injectable()
class DeleteUsuarioUseCase {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository
  ) {}
  async execute({ id }: IRequest): Promise<void> {
    const usuario = await this.usuarioRepository.findById(id);

    if (!usuario) {
      throw new AppError("Usuario não existe");
    }
    await this.usuarioRepository.delete(id);
  }
}

export { DeleteUsuarioUseCase };
