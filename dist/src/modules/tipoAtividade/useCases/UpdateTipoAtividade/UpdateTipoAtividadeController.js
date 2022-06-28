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
exports.UpdateTipoAtividadeController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateTipoAtividadeUseCase_1 = require("./UpdateTipoAtividadeUseCase");
class UpdateTipoAtividadeController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_tipo_atividade } = request.params;
            const { nome_tipo_atividade, modalidade_tipo_atividade, gera_arrecadacao_tipo_atividade, descricao, } = request.body;
            const updateTipoAtividadeUseCase = tsyringe_1.container.resolve(UpdateTipoAtividadeUseCase_1.UpdateTipoAtividadeUseCase);
            const tipoatividade = yield updateTipoAtividadeUseCase.execute({
                id_tipo_atividade,
                nome_tipo_atividade,
                modalidade_tipo_atividade,
                gera_arrecadacao_tipo_atividade,
                descricao,
            });
            return response.status(201).json(tipoatividade);
        });
    }
}
exports.UpdateTipoAtividadeController = UpdateTipoAtividadeController;
