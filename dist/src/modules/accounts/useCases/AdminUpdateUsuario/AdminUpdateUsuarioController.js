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
exports.AdminUpdateUsuarioController = void 0;
const tsyringe_1 = require("tsyringe");
const AdminUpdateUsuarioUseCase_1 = require("./AdminUpdateUsuarioUseCase");
class AdminUpdateUsuarioController {
    handler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_usuario } = request.params;
            const { primeiro_nome_usuario, ultimo_nome_usuario, email_usuario, foto_perfil_usuario, cpf_usuario, id_cargo, rua_usuario, bairro_usuario, cep_usuario, numero_residencia_usuario, complemento_residencia_usuario, cidade_usuario, estado_usuario, pais_usuario, } = request.body;
            const adminUpdateUsuarioUseCase = tsyringe_1.container.resolve(AdminUpdateUsuarioUseCase_1.AdminUpdateUsuarioUseCase);
            const usuario = yield adminUpdateUsuarioUseCase.execute({
                id_usuario,
                primeiro_nome_usuario,
                ultimo_nome_usuario,
                email_usuario,
                foto_perfil_usuario,
                cpf_usuario,
                id_cargo,
                rua_usuario,
                bairro_usuario,
                cep_usuario,
                numero_residencia_usuario,
                complemento_residencia_usuario,
                cidade_usuario,
                estado_usuario,
                pais_usuario,
            });
            return response.status(201).json(usuario);
        });
    }
}
exports.AdminUpdateUsuarioController = AdminUpdateUsuarioController;
