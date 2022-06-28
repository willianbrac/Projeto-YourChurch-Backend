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
exports.UpdateSenhaUsuarioController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateSenhaUsuarioUseCase_1 = require("./UpdateSenhaUsuarioUseCase");
class UpdateSenhaUsuarioController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.usuario;
            const { senha_usuario } = request.body;
            const updateSenhaUsuarioUseCase = tsyringe_1.container.resolve(UpdateSenhaUsuarioUseCase_1.UpdateSenhaUsuarioUseCase);
            yield updateSenhaUsuarioUseCase.execute({
                id_usuario: id,
                senha_usuario,
            });
            return response.status(201).json({
                message: `Senha nova: ${senha_usuario}`,
            });
        });
    }
}
exports.UpdateSenhaUsuarioController = UpdateSenhaUsuarioController;
