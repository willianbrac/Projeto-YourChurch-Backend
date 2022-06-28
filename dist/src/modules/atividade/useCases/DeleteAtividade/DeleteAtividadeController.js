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
exports.DeleteAtividadeController = void 0;
const tsyringe_1 = require("tsyringe");
const DeleteAtividadeUseCase_1 = require("./DeleteAtividadeUseCase");
class DeleteAtividadeController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_atividade } = request.params;
            const deleteAtividadeUseCase = tsyringe_1.container.resolve(DeleteAtividadeUseCase_1.DeleteAtividadeUseCase);
            yield deleteAtividadeUseCase.execute({ id_atividade });
            return response
                .status(201)
                .json({ message: "Atividade deletada com sucesso" });
        });
    }
}
exports.DeleteAtividadeController = DeleteAtividadeController;
