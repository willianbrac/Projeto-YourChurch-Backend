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
exports.ListIgrejaController = void 0;
const tsyringe_1 = require("tsyringe");
const ListIgrejaUseCase_1 = require("./ListIgrejaUseCase");
class ListIgrejaController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_igreja } = request.params;
            const listIgrejaUseCase = tsyringe_1.container.resolve(ListIgrejaUseCase_1.ListIgrejaUseCase);
            const igreja = yield listIgrejaUseCase.execute({ id_igreja });
            return response.status(201).send(igreja);
        });
    }
}
exports.ListIgrejaController = ListIgrejaController;
