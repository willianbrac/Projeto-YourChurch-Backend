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
exports.CountAtividadesController = void 0;
const tsyringe_1 = require("tsyringe");
const CountAtividadesUseCase_1 = require("./CountAtividadesUseCase");
class CountAtividadesController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_igreja } = request.body;
            const countAtividadesUseCase = tsyringe_1.container.resolve(CountAtividadesUseCase_1.CountAtividadesUseCase);
            const atividades = yield countAtividadesUseCase.execute(id_igreja);
            return response.status(201).json(atividades);
        });
    }
}
exports.CountAtividadesController = CountAtividadesController;
