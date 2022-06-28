import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { deleteFile } from "../../../../utils/file";
import { ICargoRepository } from "../../../cargo/repositories/ICargoRepository";
import { INivelAcessoRepository } from "../../../nivelAcesso/repositories/INivelAcessoRepository";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";

interface IRequest {
  id_usuario?: string;
  primeiro_nome_usuario: string;
  ultimo_nome_usuario: string;
  email_usuario: string;
  cpf_usuario: string;
  id_cargo: string;
  rua_usuario: string;
  bairro_usuario: string;
  cep_usuario: string;
  numero_residencia_usuario: number;
  complemento_residencia_usuario: string;
  cidade_usuario: string;
  estado_usuario: string;
  pais_usuario: string;
  foto_perfil_usuario?: string;
}

interface IResponse {
  user: {
    id_usuario: string;
    primeiro_nome_usuario: string;
    ultimo_nome_usuario: string;
    email_usuario: string;
    cpf_usuario: string;
    rua_usuario: string;
    bairro_usuario: string;
    cep_usuario: string;
    numero_residencia_usuario: number;
    complemento_residencia_usuario: string;
    cidade_usuario: string;
    estado_usuario: string;
    pais_usuario: string;
    foto_perfil_usuario: string;
  };
  cargo: {
    id_cargo: string;
    nome_cargo: string;
    descricao: string;
  };
  nivelacesso: {
    id_nivel_acesso: string;
    titulo_nivel_acesso: string;
    tipo_nivel_acesso: number;
    descricao: string;
  };
}

@injectable()
class UpdateUsuarioUseCase {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository,
    @inject("CargoRepository")
    private cargoRepository: ICargoRepository,
    @inject("NivelAcessoRepository")
    private nivelAcessoRepository: INivelAcessoRepository
  ) {}
  async execute({
    id_usuario,
    primeiro_nome_usuario,
    ultimo_nome_usuario,
    email_usuario,
    cpf_usuario,
    id_cargo,
    rua_usuario,
    bairro_usuario,
    cep_usuario,
    numero_residencia_usuario,
    complemento_residencia_usuario,
    cidade_usuario,
    estado_usuario,
    pais_usuario,
    foto_perfil_usuario,
  }: IRequest): Promise<IResponse> {
    const usuario = await this.usuarioRepository.findById(id_usuario);
    const cargo = await this.cargoRepository.findByCargoId(id_cargo);

    if (!cargo) {
      throw new AppError("O cargo informado nao existe");
    }

    const { id_nivel_acesso } = cargo;
    const nivelacesso = await this.nivelAcessoRepository.listUniqueNivelAcesso(
      id_nivel_acesso
    );

    if (!nivelacesso) {
      throw new AppError("O nivel de acesso informado nao existe");
    }

    if (usuario.foto_perfil_usuario) {
      await deleteFile(`./tmp/fotosUsuario/${usuario.foto_perfil_usuario}`);
    }

    usuario.primeiro_nome_usuario =
      primeiro_nome_usuario || usuario.primeiro_nome_usuario;

    usuario.ultimo_nome_usuario =
      ultimo_nome_usuario || usuario.ultimo_nome_usuario;

    usuario.email_usuario = email_usuario || usuario.email_usuario;
    usuario.cpf_usuario = cpf_usuario || usuario.cpf_usuario;
    usuario.id_cargo = id_cargo || usuario.id_cargo;
    usuario.rua_usuario = rua_usuario || usuario.rua_usuario;
    usuario.bairro_usuario = bairro_usuario || usuario.bairro_usuario;
    usuario.cep_usuario = cep_usuario || usuario.cep_usuario;

    usuario.numero_residencia_usuario =
      numero_residencia_usuario || usuario.numero_residencia_usuario;

    usuario.complemento_residencia_usuario =
      complemento_residencia_usuario || usuario.complemento_residencia_usuario;

    usuario.cidade_usuario = cidade_usuario || usuario.cidade_usuario;
    usuario.estado_usuario = estado_usuario || usuario.estado_usuario;
    usuario.pais_usuario = pais_usuario || usuario.pais_usuario;

    usuario.foto_perfil_usuario =
      foto_perfil_usuario || usuario.foto_perfil_usuario;

    const usuarioUpdate = await this.usuarioRepository.update(usuario);

    const returnUsuario: IResponse = {
      user: {
        id_usuario: usuarioUpdate.id_usuario,
        primeiro_nome_usuario: usuarioUpdate.primeiro_nome_usuario,
        ultimo_nome_usuario: usuarioUpdate.ultimo_nome_usuario,
        email_usuario: usuarioUpdate.email_usuario,
        cpf_usuario: usuarioUpdate.cpf_usuario,
        rua_usuario: usuarioUpdate.rua_usuario,
        bairro_usuario: usuarioUpdate.bairro_usuario,
        cep_usuario: usuarioUpdate.cep_usuario,
        numero_residencia_usuario: usuarioUpdate.numero_residencia_usuario,

        complemento_residencia_usuario:
          usuarioUpdate.complemento_residencia_usuario,

        cidade_usuario: usuarioUpdate.cidade_usuario,
        estado_usuario: usuarioUpdate.estado_usuario,
        pais_usuario: usuarioUpdate.pais_usuario,
        foto_perfil_usuario: usuarioUpdate.foto_perfil_usuario,
      },
      cargo: {
        id_cargo: cargo.id_cargo,
        nome_cargo: cargo.nome_cargo,
        descricao: cargo.descricao,
      },
      nivelacesso: {
        id_nivel_acesso: nivelacesso.id_nivel_acesso,
        titulo_nivel_acesso: nivelacesso.titulo_nivel_acesso,
        tipo_nivel_acesso: nivelacesso.tipo_nivel_acesso,
        descricao: nivelacesso.descricao,
      },
    };
    return returnUsuario;
  }
}

export { UpdateUsuarioUseCase };
