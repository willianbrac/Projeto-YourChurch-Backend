import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { INivelAcessoRepository } from "../../repositories/INivelAcessoRepository";

interface IRequest {
  id: string;
}

@injectable()
class DeleteNivelAcessoUseCase {
  constructor(
    @inject("NivelAcessoRepository")
    private nivelAcessoRepository: INivelAcessoRepository
  ) {}
  async execute({ id }: IRequest): Promise<void> {
    const nivelAcessoExiste = await this.nivelAcessoRepository.listUniqueNivelAcesso(
      id
    );
    if (!nivelAcessoExiste) {
      throw new AppError("O nivel de acesso informado não existe");
    }

    await this.nivelAcessoRepository.delete(id);
  }
}

export { DeleteNivelAcessoUseCase };
