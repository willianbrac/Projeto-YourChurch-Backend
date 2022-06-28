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
exports.UpdateSenhaUsuarioUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("../../../../shared/errors/AppError");
let UpdateSenhaUsuarioUseCase = class UpdateSenhaUsuarioUseCase {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    execute({ id_usuario, senha_usuario }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield this.usuarioRepository.findById(id_usuario);
            if (!usuario) {
                throw new AppError_1.AppError("Usuario não existe");
            }
            const senhaIgual = yield bcrypt_1.compare(senha_usuario, usuario.senha_usuario);
            if (senhaIgual) {
                throw new AppError_1.AppError("A nova senha informada é igual à sua senha atual");
            }
            const hashSenha = yield bcrypt_1.hash(senha_usuario, 8);
            usuario.senha_usuario = hashSenha || usuario.senha_usuario;
            yield this.usuarioRepository.update(usuario);
        });
    }
};
UpdateSenhaUsuarioUseCase = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("UsuarioRepository")),
    __metadata("design:paramtypes", [Object])
], UpdateSenhaUsuarioUseCase);
exports.UpdateSenhaUsuarioUseCase = UpdateSenhaUsuarioUseCase;
