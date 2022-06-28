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
exports.CreateIgrejaController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateIgrejaUseCase_1 = require("./CreateIgrejaUseCase");
class CreateIgrejaController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome_igreja, cnpj_igreja, logo_igreja, isMatriz, quantidade_membro_igreja, rua_igreja, bairro_igreja, cep_igreja, numero_residencia_igreja, complemento_residencia_igreja, id_usuario, cidade_igreja, estado_igreja, pais_igreja, id_igreja_matriz, } = request.body;
            const createIgrejaUseCase = tsyringe_1.container.resolve(CreateIgrejaUseCase_1.CreateIgrejaUseCase);
            yield createIgrejaUseCase.execute({
                nome_igreja,
                cnpj_igreja,
                logo_igreja,
                isMatriz,
                quantidade_membro_igreja,
                rua_igreja,
                bairro_igreja,
                cep_igreja,
                numero_residencia_igreja,
                complemento_residencia_igreja,
                id_usuario,
                cidade_igreja,
                estado_igreja,
                pais_igreja,
                id_igreja_matriz,
            });
            return response.status(201).send();
        });
    }
}
exports.CreateIgrejaController = CreateIgrejaController;
