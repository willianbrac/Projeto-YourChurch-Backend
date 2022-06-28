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
exports.CreateTipoAtividadeController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateTipoAtividadeUseCase_1 = require("./CreateTipoAtividadeUseCase");
class CreateTipoAtividadeController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome_tipo_atividade, modalidade_tipo_atividade, gera_arrecadacao_tipo_atividade, descricao, } = request.body;
            const createTipoAtividadeUseCase = tsyringe_1.container.resolve(CreateTipoAtividadeUseCase_1.CreateTipoAtividadeUseCase);
            yield createTipoAtividadeUseCase.execute({
                nome_tipo_atividade,
                modalidade_tipo_atividade,
                gera_arrecadacao_tipo_atividade,
                descricao,
            });
            return response.status(201).send();
        });
    }
}
exports.CreateTipoAtividadeController = CreateTipoAtividadeController;
