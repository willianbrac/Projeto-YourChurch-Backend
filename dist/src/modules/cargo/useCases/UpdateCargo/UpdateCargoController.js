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
exports.UpdateCargoController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateCargoUseCase_1 = require("./UpdateCargoUseCase");
class UpdateCargoController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_cargo } = request.params;
            const { nome_cargo, descricao, id_nivel_acesso } = request.body;
            const updateCargoUseCase = tsyringe_1.container.resolve(UpdateCargoUseCase_1.UpdateCargoUseCase);
            const cargo = yield updateCargoUseCase.execute({
                id_cargo,
                nome_cargo,
                descricao,
                id_nivel_acesso,
            });
            return response.status(201).json(cargo);
        });
    }
}
exports.UpdateCargoController = UpdateCargoController;
