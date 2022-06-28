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
exports.UpdateNivelAcessoController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateNivelAcessoUseCase_1 = require("./UpdateNivelAcessoUseCase");
class UpdateNivelAcessoController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_nivel_acesso } = request.params;
            const { titulo_nivel_acesso, tipo_nivel_acesso, descricao } = request.body;
            const updateNivelAcessoUseCase = tsyringe_1.container.resolve(UpdateNivelAcessoUseCase_1.UpdateNivelAcessoUseCase);
            const nivelacesso = yield updateNivelAcessoUseCase.execute({
                id_nivel_acesso,
                titulo_nivel_acesso,
                tipo_nivel_acesso,
                descricao,
            });
            return response.status(201).json(nivelacesso);
        });
    }
}
exports.UpdateNivelAcessoController = UpdateNivelAcessoController;
