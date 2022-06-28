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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUsuarioUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const tsyringe_1 = require("tsyringe");
const auth_1 = __importDefault(require("../../../../config/auth"));
const AppError_1 = require("../../../../shared/errors/AppError");
let AuthenticateUsuarioUseCase = class AuthenticateUsuarioUseCase {
    constructor(usuarioRepository, cargoRepository, nivelAcessoRepository, tokensUsuariosRepository, dateProvider) {
        this.usuarioRepository = usuarioRepository;
        this.cargoRepository = cargoRepository;
        this.nivelAcessoRepository = nivelAcessoRepository;
        this.tokensUsuariosRepository = tokensUsuariosRepository;
        this.dateProvider = dateProvider;
    }
    execute({ email_usuario, senha_usuario, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usuarioRepository.findByEmail(email_usuario);
            const { expires_in_token, secret_refresh_token, secret_token, expires_in_refresh_token, expires_in_refresh_token_days, } = auth_1.default;
            if (!user) {
                throw new AppError_1.AppError("Email ou senha incorreto");
            }
            const { id_cargo } = user;
            const cargo = yield this.cargoRepository.findByCargoId(id_cargo);
            if (!cargo) {
                throw new AppError_1.AppError("cargo não existe");
            }
            const { id_nivel_acesso } = cargo;
            const nivelacesso = yield this.nivelAcessoRepository.listUniqueNivelAcesso(id_nivel_acesso);
            if (!nivelacesso) {
                throw new AppError_1.AppError("nivel de acesso não existe");
            }
            const senhaIgual = yield bcrypt_1.compare(senha_usuario, user.senha_usuario);
            if (!senhaIgual) {
                throw new AppError_1.AppError("Email ou senha incorreto");
            }
            const token = jsonwebtoken_1.sign({ user, cargo, nivelacesso }, secret_token, {
                subject: user.id_usuario,
                expiresIn: expires_in_token,
            });
            const refresh_token = jsonwebtoken_1.sign({}, secret_refresh_token, {
                subject: user.id_usuario,
                expiresIn: expires_in_refresh_token,
            });
            const refresh_token_expires_date = this.dateProvider.addDays(expires_in_refresh_token_days);
            yield this.tokensUsuariosRepository.create({
                expires_date: refresh_token_expires_date,
                refresh_token,
                id_usuario: user.id_usuario,
            });
            const tokenReturn = {
                user: {
                    email_usuario: user.email_usuario,
                    primeiro_nome_usuario: user.primeiro_nome_usuario,
                    ultimo_nome_usuario: user.ultimo_nome_usuario,
                    id_usuario: user.id_usuario,
                },
                token,
                refresh_token,
            };
            return tokenReturn;
        });
    }
};
AuthenticateUsuarioUseCase = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("UsuarioRepository")),
    __param(1, tsyringe_1.inject("CargoRepository")),
    __param(2, tsyringe_1.inject("NivelAcessoRepository")),
    __param(3, tsyringe_1.inject("TokensUsuariosRepository")),
    __param(4, tsyringe_1.inject("DayjsDateProvider")),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], AuthenticateUsuarioUseCase);
exports.AuthenticateUsuarioUseCase = AuthenticateUsuarioUseCase;
