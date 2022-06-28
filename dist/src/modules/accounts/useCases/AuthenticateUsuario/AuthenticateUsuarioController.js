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
exports.AuthenticateUsuarioController = void 0;
const tsyringe_1 = require("tsyringe");
const AuthenticateUsuarioUseCase_1 = require("./AuthenticateUsuarioUseCase");
class AuthenticateUsuarioController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email_usuario, senha_usuario } = request.body;
            const authenticateUsuarioUseCase = tsyringe_1.container.resolve(AuthenticateUsuarioUseCase_1.AuthenticateUsuarioUseCase);
            const token = yield authenticateUsuarioUseCase.execute({
                email_usuario,
                senha_usuario,
            });
            return response.json(token);
        });
    }
}
exports.AuthenticateUsuarioController = AuthenticateUsuarioController;
