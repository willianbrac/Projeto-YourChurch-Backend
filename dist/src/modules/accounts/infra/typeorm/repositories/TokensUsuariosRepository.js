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
exports.TokensUsuariosRepository = void 0;
const typeorm_1 = require("typeorm");
const TokensUsuarios_1 = require("../entities/TokensUsuarios");
class TokensUsuariosRepository {
    constructor() {
        this.repository = typeorm_1.getRepository(TokensUsuarios_1.TokensUsuarios);
    }
    create({ expires_date, refresh_token, id_usuario, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenUsuario = this.repository.create({
                expires_date,
                refresh_token,
                id_usuario,
            });
            yield this.repository.save(tokenUsuario);
            return tokenUsuario;
        });
    }
}
exports.TokensUsuariosRepository = TokensUsuariosRepository;
