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
exports.CreateUsuarioUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("../../../../shared/errors/AppError");
const CargoRepository_1 = require("../../../cargo/infra/typeorm/repositories/CargoRepository");
let CreateUsuarioUseCase = class CreateUsuarioUseCase {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    execute({ primeiro_nome_usuario, ultimo_nome_usuario, email_usuario, foto_perfil_usuario, senha_usuario, cpf_usuario, id_cargo, rua_usuario, bairro_usuario, cep_usuario, numero_residencia_usuario, complemento_residencia_usuario, cidade_usuario, estado_usuario, pais_usuario, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargoRepository = new CargoRepository_1.CargoRepository();
            const emailUsuarioExiste = yield this.usuarioRepository.findByEmail(email_usuario);
            if (emailUsuarioExiste) {
                throw new AppError_1.AppError("O email informado já existe");
            }
            const cpfUsuarioExiste = yield this.usuarioRepository.findByCpf(cpf_usuario);
            if (cpfUsuarioExiste) {
                throw new AppError_1.AppError("O CPF informado já existe");
            }
            const cargo = yield cargoRepository.findByCargoId(id_cargo);
            if (!cargo) {
                throw new AppError_1.AppError("O cargo informado não existe");
            }
            const hashSenha = yield bcrypt_1.hash(senha_usuario, 8);
            yield this.usuarioRepository.create({
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
        });
    }
};
CreateUsuarioUseCase = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("UsuarioRepository")),
    __metadata("design:paramtypes", [Object])
], CreateUsuarioUseCase);
exports.CreateUsuarioUseCase = CreateUsuarioUseCase;
