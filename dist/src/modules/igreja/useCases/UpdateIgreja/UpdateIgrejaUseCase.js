"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.UpdateIgrejaUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("../../../../shared/errors/AppError");
const file_1 = require("../../../../utils/file");
let UpdateIgrejaUseCase = class UpdateIgrejaUseCase {
    constructor(igrejaRepository, usuarioRepository) {
        this.igrejaRepository = igrejaRepository;
        this.usuarioRepository = usuarioRepository;
    }
    execute({ id_igreja, nome_igreja, cnpj_igreja, logo_igreja, isMatriz, quantidade_membro_igreja, rua_igreja, bairro_igreja, cep_igreja, numero_residencia_igreja, complemento_residencia_igreja, id_usuario, cidade_igreja, estado_igreja, pais_igreja, id_igreja_matriz, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const igreja = yield this.igrejaRepository.findById(id_igreja);
            const usuario = yield this.usuarioRepository.findById(id_usuario);
            // const usuarioExisteIgreja = await this.igrejaRepository.findUsuarioIgreja(
            //   id_usuario
            // );
            if (!igreja) {
                throw new AppError_1.AppError("A igreja informada nao existe");
            }
            if (!usuario) {
                throw new AppError_1.AppError("O usuario informada nao existe");
            }
            // if (usuarioExisteIgreja) {
            //   throw new AppError(
            //     "O usuario informado ja está vinculado a outra igreja"
            //   );
            // }
            if (igreja.logo_igreja) {
                yield file_1.deleteFile(`./tmp/fotosIgreja/${igreja.logo_igreja}`);
            }
            igreja.nome_igreja = nome_igreja || igreja.nome_igreja;
            igreja.cnpj_igreja = cnpj_igreja || igreja.cnpj_igreja;
            igreja.logo_igreja = logo_igreja || igreja.logo_igreja;
            igreja.isMatriz = isMatriz || igreja.isMatriz;
            igreja.quantidade_membro_igreja =
                quantidade_membro_igreja || igreja.quantidade_membro_igreja;
            igreja.rua_igreja = rua_igreja || igreja.rua_igreja;
            igreja.bairro_igreja = bairro_igreja || igreja.bairro_igreja;
            igreja.cep_igreja = cep_igreja || igreja.cep_igreja;
            igreja.numero_residencia_igreja =
                numero_residencia_igreja || igreja.numero_residencia_igreja;
            igreja.id_usuario = id_usuario || igreja.id_usuario;
            igreja.complemento_residencia_igreja =
                complemento_residencia_igreja || igreja.complemento_residencia_igreja;
            igreja.cidade_igreja = cidade_igreja || igreja.cidade_igreja;
            igreja.estado_igreja = estado_igreja || igreja.estado_igreja;
            igreja.pais_igreja = pais_igreja || igreja.pais_igreja;
            igreja.id_igreja_matriz = id_igreja_matriz || igreja.id_igreja_matriz;
            const updateIgreja = yield this.igrejaRepository.update(igreja);
            const igrejaReturn = {
                id_igreja: updateIgreja.id_igreja,
                nome_igreja: updateIgreja.nome_igreja,
                cnpj_igreja: updateIgreja.cnpj_igreja,
                logo_igreja: updateIgreja.logo_igreja,
                isMatriz: updateIgreja.isMatriz,
                quantidade_membro_igreja: updateIgreja.quantidade_membro_igreja,
                rua_igreja: updateIgreja.rua_igreja,
                bairro_igreja: updateIgreja.bairro_igreja,
                cep_igreja: updateIgreja.cep_igreja,
                numero_residencia_igreja: updateIgreja.numero_residencia_igreja,
                complemento_residencia_igreja: updateIgreja.complemento_residencia_igreja,
                id_usuario: updateIgreja.id_usuario,
                cidade_igreja: updateIgreja.cidade_igreja,
                estado_igreja: updateIgreja.estado_igreja,
                pais_igreja: updateIgreja.pais_igreja,
                id_igreja_matriz: updateIgreja.id_igreja_matriz,
            };
            return igrejaReturn;
        });
    }
};
UpdateIgrejaUseCase = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("IgrejaRepository")),
    __param(1, tsyringe_1.inject("UsuarioRepository")),
    __metadata("design:paramtypes", [Object, Object])
], UpdateIgrejaUseCase);
exports.UpdateIgrejaUseCase = UpdateIgrejaUseCase;
