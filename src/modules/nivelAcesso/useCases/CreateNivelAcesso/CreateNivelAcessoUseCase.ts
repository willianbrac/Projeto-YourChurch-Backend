import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { INivelAcessoRepository } from "../../repositories/INivelAcessoRepository";

interface IRequest {
  titulo_nivel_acesso: string;
  tipo_nivel_acesso: number;
  descricao: string;
}

@injectable()
class CreateNivelAcessoUseCase {
  constructor(
    @inject("NivelAcessoRepository")
    private nivelAcessoRepository: INivelAcessoRepository
  ) {}

  async execute({
    titulo_nivel_acesso,
    tipo_nivel_acesso,
    descricao,
  }: IRequest): Promise<void> {
    const nivelAcessoExiste = await this.nivelAcessoRepository.findByName(
      titulo_nivel_acesso
    );

    if (nivelAcessoExiste) {
      throw new AppError("Nivel de acesso já existe");
    }

    const tipoAcessoExiste = await this.nivelAcessoRepository.findByTipoAcesso(
      tipo_nivel_acesso
    );

    if (tipoAcessoExiste) {
      throw new AppError(
        "O tipo de acesso já está atribuído à um nivel de acesso já existente"
      );
    }

    await this.nivelAcessoRepository.create({
      titulo_nivel_acesso,
      tipo_nivel_acesso,
      descricao,
    });
  }
}

export { CreateNivelAcessoUseCase };
