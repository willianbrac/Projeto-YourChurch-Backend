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
exports.RelatorioAtividadesController = void 0;
const tsyringe_1 = require("tsyringe");
const RelatorioAtividadesUseCase_1 = require("./RelatorioAtividadesUseCase");
class RelatorioAtividadesController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_igreja } = request.params;
            const { id_tipo_atividade, data_inicio, data_final } = request.body;
            const relatorioAtividadesController = tsyringe_1.container.resolve(RelatorioAtividadesUseCase_1.RelatorioAtividadesUseCase);
            const atividades = yield relatorioAtividadesController.execute({
                id_igreja,
                data_inicio,
                data_final,
                id_tipo_atividade,
            });
            return response.status(201).json(atividades);
        });
    }
}
exports.RelatorioAtividadesController = RelatorioAtividadesController;
