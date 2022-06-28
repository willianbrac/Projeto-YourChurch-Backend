"use strict";
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
exports.ensureisAdminAndUsuarioComum = void 0;
const UsuarioRepository_1 = require("../../../../modules/accounts/infra/typeorm/repositories/UsuarioRepository");
const CargoRepository_1 = require("../../../../modules/cargo/infra/typeorm/repositories/CargoRepository");
const NivelAcessoRepository_1 = require("../../../../modules/nivelAcesso/infra/typeorm/repositories/NivelAcessoRepository");
const AppError_1 = require("../../../errors/AppError");
function ensureisAdminAndUsuarioComum(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = request.usuario;
        const usuarioRepository = new UsuarioRepository_1.UsuarioRepository();
        const cargoRepository = new CargoRepository_1.CargoRepository();
        const nivelacessoRepository = new NivelAcessoRepository_1.NivelAcessoRepository();
        const usuario = yield usuarioRepository.findById(id);
        if (!usuario) {
            throw new AppError_1.AppError("Usuario nao existe");
        }
        const { id_cargo } = usuario;
        const cargo = yield cargoRepository.findByCargoId(id_cargo);
        if (!cargo) {
            throw new AppError_1.AppError("Cargo nao existe");
        }
        const { id_nivel_acesso } = cargo;
        const nivelacesso = yield nivelacessoRepository.listUniqueNivelAcesso(id_nivel_acesso);
        if (!nivelacesso) {
            throw new AppError_1.AppError("Nivel de acesso nao existe");
        }
        if ((id === usuario.id_usuario &&
            usuario.id_cargo === cargo.id_cargo &&
            (yield cargo.nivelAcesso).tipo_nivel_acesso === 1) ||
            (yield cargo.nivelAcesso).tipo_nivel_acesso === 2) {
            return next();
        }
        throw new AppError_1.AppError("Usuario não tem permissão de administrador para realizar a operação");
    });
}
exports.ensureisAdminAndUsuarioComum = ensureisAdminAndUsuarioComum;
