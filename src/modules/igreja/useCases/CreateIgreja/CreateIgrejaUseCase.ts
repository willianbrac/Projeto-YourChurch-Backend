import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IIgrejaRepository } from "../../repositories/IIgrejaRepository";

interface IRequest {
  nome_igreja: string;
  cnpj_igreja: string;
  logo_igreja?: string;
  isMatriz: boolean;
  quantidade_membro_igreja: number;
  rua_igreja: string;
  bairro_igreja: string;
  cep_igreja: string;
  numero_residencia_igreja: number;
  complemento_residencia_igreja: string;
  id_usuario: string;
  cidade_igreja: string;
  estado_igreja: string;
  pais_igreja: string;
  id_igreja_matriz: string;
}

@injectable()
class CreateIgrejaUseCase {
  constructor(
    @inject("IgrejaRepository")
    private igrejaRepository: IIgrejaRepository
  ) {}
  async execute({
    cnpj_igreja,
    nome_igreja,
    logo_igreja,
    isMatriz,
    quantidade_membro_igreja,
    rua_igreja,
    bairro_igreja,
    cep_igreja,
    numero_residencia_igreja,
    complemento_residencia_igreja,
    id_usuario,
    cidade_igreja,
    estado_igreja,
    pais_igreja,
    id_igreja_matriz,
  }: IRequest): Promise<void> {
    const igreja = await this.igrejaRepository.findByName(nome_igreja);
    const usuario = await this.igrejaRepository.findUsuarioIgreja(id_usuario);

    if (igreja) {
      throw new AppError("igreja ja existe");
    }

    if (usuario) {
      throw new AppError("usuario ja vinculado a outra igreja");
    }

    await this.igrejaRepository.create({
      nome_igreja,
      cnpj_igreja,
      logo_igreja,
      isMatriz,
      quantidade_membro_igreja,
      rua_igreja,
      bairro_igreja,
      cep_igreja,
      numero_residencia_igreja,
      id_usuario,
      complemento_residencia_igreja,
      cidade_igreja,
      estado_igreja,
      pais_igreja,
      id_igreja_matriz,
    });
  }
}

export { CreateIgrejaUseCase };
