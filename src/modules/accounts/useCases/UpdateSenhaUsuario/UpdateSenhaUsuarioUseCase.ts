import { compare, hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";

interface IRequest {
  id_usuario: string;
  senha_usuario: string;
}

@injectable()
class UpdateSenhaUsuarioUseCase {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository
  ) {}
  async execute({ id_usuario, senha_usuario }: IRequest): Promise<void> {
    const usuario = await this.usuarioRepository.findById(id_usuario);

    if (!usuario) {
      throw new AppError("Usuario não existe");
    }

    const senhaIgual = await compare(senha_usuario, usuario.senha_usuario);

    if (senhaIgual) {
      throw new AppError("A nova senha informada é igual à sua senha atual");
    }

    const hashSenha = await hash(senha_usuario, 8);
    usuario.senha_usuario = hashSenha || usuario.senha_usuario;

    await this.usuarioRepository.update(usuario);
  }
}

export { UpdateSenhaUsuarioUseCase };
