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
exports.UpdateAtividadeController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateAtividadeUseCase_1 = require("./UpdateAtividadeUseCase");
class UpdateAtividadeController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_atividade } = request.params;
            const { id_tipo_atividade, id_igreja, data_atividade, hora_inicio_atividade, hora_termino_atividade, quantidade_visitantes_atividade, quantidade_membros_atividade, tema_atividade, responsavel_atividade, dizimo_atividade, oferta_atividade, num_reconciliacao_atividade, num_decisoes_atividade, preleitor_atividade, observacao_atividade, } = request.body;
            const updateAtividadeUseCase = tsyringe_1.container.resolve(UpdateAtividadeUseCase_1.UpdateAtividadeUseCase);
            const atividade = yield updateAtividadeUseCase.execute({
                id_atividade,
                id_tipo_atividade,
                id_igreja,
                data_atividade,
                hora_inicio_atividade,
                hora_termino_atividade,
                quantidade_visitantes_atividade,
                quantidade_membros_atividade,
                tema_atividade,
                responsavel_atividade,
                dizimo_atividade,
                oferta_atividade,
                num_reconciliacao_atividade,
                num_decisoes_atividade,
                preleitor_atividade,
                observacao_atividade,
            });
            return response.status(201).json(atividade);
        });
    }
}
exports.UpdateAtividadeController = UpdateAtividadeController;
