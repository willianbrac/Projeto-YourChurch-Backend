import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { CargoRepository } from "../../../cargo/infra/typeorm/repositories/CargoRepository";
import { ICreateUsuarioDTO } from "../../dtos/ICreateUsuarioDTO";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";

@injectable()
class CreateUsuarioUseCase {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository
  ) {}
  async execute({
    primeiro_nome_usuario,
    ultimo_nome_usuario,
    email_usuario,
    foto_perfil_usuario,
    senha_usuario,
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
  }: ICreateUsuarioDTO): Promise<void> {
    const cargoRepository = new CargoRepository();
    const emailUsuarioExiste = await this.usuarioRepository.findByEmail(
      email_usuario
    );

    if (emailUsuarioExiste) {
      throw new AppError("O email informado já existe");
    }

    const cpfUsuarioExiste = await this.usuarioRepository.findByCpf(
      cpf_usuario
    );

    if (cpfUsuarioExiste) {
      throw new AppError("O CPF informado já existe");
    }

    const cargo = await cargoRepository.findByCargoId(id_cargo);

    if (!cargo) {
      throw new AppError("O cargo informado não existe");
    }

    const hashSenha = await hash(senha_usuario, 8);

    await this.usuarioRepository.create({
      primeiro_nome_usuario,
      ultimo_nome_usuario,
      email_usuario,
      foto_perfil_usuario,
      senha_usuario: hashSenha,
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
    });
  }
}

export { CreateUsuarioUseCase };
