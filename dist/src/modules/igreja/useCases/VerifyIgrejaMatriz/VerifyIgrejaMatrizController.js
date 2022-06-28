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
exports.VerifyIgrejaMatrizController = void 0;
const tsyringe_1 = require("tsyringe");
const VerifyIgrejaMatrizUseCase_1 = require("./VerifyIgrejaMatrizUseCase");
class VerifyIgrejaMatrizController {
    handler(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.usuario;
            const verifyIgrejaMatrizUseCase = tsyringe_1.container.resolve(VerifyIgrejaMatrizUseCase_1.VerifyIgrejaMatrizUseCase);
            const igrejaMatriz = yield verifyIgrejaMatrizUseCase.execute({
                id_usuario: id,
            });
            try {
                if (igrejaMatriz.isMatriz === true) {
                    next();
                }
            }
            catch (_a) {
                return response.status(400).json({ message: "Nao existe igreja matriz" });
            }
            return response.json(igrejaMatriz);
        });
    }
}
exports.VerifyIgrejaMatrizController = VerifyIgrejaMatrizController;
