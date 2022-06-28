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
exports.ListUsuarioController = void 0;
const tsyringe_1 = require("tsyringe");
const ListUsuarioUseCase_1 = require("./ListUsuarioUseCase");
class ListUsuarioController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const listUsuarioUseCase = tsyringe_1.container.resolve(ListUsuarioUseCase_1.ListUsuarioUseCase);
            const allUsuarios = yield listUsuarioUseCase.execute();
            return response.status(201).json(allUsuarios);
        });
    }
}
exports.ListUsuarioController = ListUsuarioController;
