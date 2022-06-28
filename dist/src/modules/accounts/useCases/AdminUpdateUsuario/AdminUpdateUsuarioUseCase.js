"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateUsuarioUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("../../../../shared/errors/AppError");
const file_1 = require("../../../../utils/file");
let AdminUpdateUsuarioUseCase = class AdminUpdateUsuarioUseCase {
    constructor(usuarioRepository, cargoRepository, nivelAcessoRepository) {
        this.usuarioRepository = usuarioRepository;
        this.cargoRepository = cargoRepository;
        this.nivelAcessoRepository = nivelAcessoRepository;
    }
    execute({ id_usuario, primeiro_nome_usuario, ultimo_nome_usuario, email_usuario, cpf_usuario, id_cargo, rua_usuario, bairro_usuario, cep_usuario, numero_residencia_usuario, complemento_residencia_usuario, cidade_usuario, estado_usuario, pais_usuario, foto_perfil_usuario, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield this.usuarioRepository.findById(id_usuario);
            const cargo = yield this.cargoRepository.findByCargoId(id_cargo);
            if (!usuario) {
                throw new AppError_1.AppError("O usuario informado não existe");
            }
            if (!cargo) {
                throw new AppError_1.AppError("O cargo informado nao existe");
            }
            const { id_nivel_acesso } = cargo;
            const nivelacesso = yield this.nivelAcessoRepository.listUniqueNivelAcesso(id_nivel_acesso);
            if (!nivelacesso) {
                throw new AppError_1.AppError("O nivel de acesso informado nao existe");
            }
            if (usuario.foto_perfil_usuario) {
                yield file_1.deleteFile(`./tmp/fotosUsuario/${usuario.foto_perfil_usuario}`);
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
            const usuarioUpdate = yield this.usuarioRepository.update(usuario);
            const returnUsuario = {
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
                    complemento_residencia_usuario: usuarioUpdate.complemento_residencia_usuario,
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
        });
    }
};
AdminUpdateUsuarioUseCase = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("UsuarioRepository")),
    __param(1, tsyringe_1.inject("CargoRepository")),
    __param(2, tsyringe_1.inject("NivelAcessoRepository")),
    __metadata("design:paramtypes", [Object, Object, Object])
], AdminUpdateUsuarioUseCase);
exports.AdminUpdateUsuarioUseCase = AdminUpdateUsuarioUseCase;
