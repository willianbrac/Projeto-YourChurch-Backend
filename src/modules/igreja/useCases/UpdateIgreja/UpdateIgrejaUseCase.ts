import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { deleteFile } from "../../../../utils/file";
import { IUsuarioRepository } from "../../../accounts/repositories/IUsuarioRepository";
import { IIgrejaRepository } from "../../repositories/IIgrejaRepository";

interface IRequest {
  id_igreja: string;
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

interface IResponse {
  id_igreja: string;
  nome_igreja: string;
  cnpj_igreja: string;
  logo_igreja: string;
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
class UpdateIgrejaUseCase {
  constructor(
    @inject("IgrejaRepository")
    private igrejaRepository: IIgrejaRepository,
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository
  ) {}

  async execute({
    id_igreja,
    nome_igreja,
    cnpj_igreja,
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
  }: IRequest): Promise<IResponse> {
    const igreja = await this.igrejaRepository.findById(id_igreja);
    const usuario = await this.usuarioRepository.findById(id_usuario);
    // const usuarioExisteIgreja = await this.igrejaRepository.findUsuarioIgreja(
    //   id_usuario
    // );

    if (!igreja) {
      throw new AppError("A igreja informada nao existe");
    }

    if (!usuario) {
      throw new AppError("O usuario informada nao existe");
    }

    // if (usuarioExisteIgreja) {
    //   throw new AppError(
    //     "O usuario informado ja está vinculado a outra igreja"
    //   );
    // }

    if (igreja.logo_igreja) {
      await deleteFile(`./tmp/fotosIgreja/${igreja.logo_igreja}`);
    }

    igreja.nome_igreja = nome_igreja || igreja.nome_igreja;
    igreja.cnpj_igreja = cnpj_igreja || igreja.cnpj_igreja;
    igreja.logo_igreja = logo_igreja || igreja.logo_igreja;
    igreja.isMatriz = isMatriz || igreja.isMatriz;

    igreja.quantidade_membro_igreja =
      quantidade_membro_igreja || igreja.quantidade_membro_igreja;

    igreja.rua_igreja = rua_igreja || igreja.rua_igreja;
    igreja.bairro_igreja = bairro_igreja || igreja.bairro_igreja;
    igreja.cep_igreja = cep_igreja || igreja.cep_igreja;

    igreja.numero_residencia_igreja =
      numero_residencia_igreja || igreja.numero_residencia_igreja;

    igreja.id_usuario = id_usuario || igreja.id_usuario;

    igreja.complemento_residencia_igreja =
      complemento_residencia_igreja || igreja.complemento_residencia_igreja;

    igreja.cidade_igreja = cidade_igreja || igreja.cidade_igreja;
    igreja.estado_igreja = estado_igreja || igreja.estado_igreja;
    igreja.pais_igreja = pais_igreja || igreja.pais_igreja;
    igreja.id_igreja_matriz = id_igreja_matriz || igreja.id_igreja_matriz;

    const updateIgreja = await this.igrejaRepository.update(igreja);

    const igrejaReturn: IResponse = {
      id_igreja: updateIgreja.id_igreja,
      nome_igreja: updateIgreja.nome_igreja,
      cnpj_igreja: updateIgreja.cnpj_igreja,
      logo_igreja: updateIgreja.logo_igreja,
      isMatriz: updateIgreja.isMatriz,
      quantidade_membro_igreja: updateIgreja.quantidade_membro_igreja,
      rua_igreja: updateIgreja.rua_igreja,
      bairro_igreja: updateIgreja.bairro_igreja,
      cep_igreja: updateIgreja.cep_igreja,
      numero_residencia_igreja: updateIgreja.numero_residencia_igreja,
      complemento_residencia_igreja: updateIgreja.complemento_residencia_igreja,
      id_usuario: updateIgreja.id_usuario,
      cidade_igreja: updateIgreja.cidade_igreja,
      estado_igreja: updateIgreja.estado_igreja,
      pais_igreja: updateIgreja.pais_igreja,
      id_igreja_matriz: updateIgreja.id_igreja_matriz,
    };
    return igrejaReturn;
  }
}

export { UpdateIgrejaUseCase };
