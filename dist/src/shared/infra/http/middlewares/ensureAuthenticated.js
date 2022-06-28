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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../../../../config/auth"));
const UsuarioRepository_1 = require("../../../../modules/accounts/infra/typeorm/repositories/UsuarioRepository");
const AppError_1 = require("../../../errors/AppError");
function ensureAuthenticated(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authenticateHeader = request.headers.authorization;
        const { secret_token } = auth_1.default;
        if (!authenticateHeader) {
            throw new AppError_1.AppError("Procurando token...", 401);
        }
        const [, token] = authenticateHeader.split(" ");
        try {
            const { sub: id_usuario } = jsonwebtoken_1.verify(token, secret_token);
            const usuarioRepository = new UsuarioRepository_1.UsuarioRepository();
            const usuario = usuarioRepository.findById(id_usuario);
            if (!usuario) {
                throw new AppError_1.AppError("Usuario não existe", 401);
            }
            request.usuario = {
                id: id_usuario,
            };
            next();
        }
        catch (_a) {
            throw new AppError_1.AppError("Token invalido", 401);
        }
    });
}
exports.ensureAuthenticated = ensureAuthenticated;
