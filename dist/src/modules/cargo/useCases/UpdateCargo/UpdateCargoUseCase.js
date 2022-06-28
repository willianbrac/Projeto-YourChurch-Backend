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
exports.UpdateCargoUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("../../../../shared/errors/AppError");
let UpdateCargoUseCase = class UpdateCargoUseCase {
    constructor(cargoRepository, nivelAcessoRepository) {
        this.cargoRepository = cargoRepository;
        this.nivelAcessoRepository = nivelAcessoRepository;
    }
    execute({ id_cargo, nome_cargo, descricao, id_nivel_acesso, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargo = yield this.cargoRepository.findByCargoId(id_cargo);
            if (!cargo) {
                throw new AppError_1.AppError("O cargo informado não existe");
            }
            const nivelacesso = yield this.nivelAcessoRepository.listUniqueNivelAcesso(id_nivel_acesso);
            if (!nivelacesso) {
                throw new AppError_1.AppError("O nivel de acesso informado não existe");
            }
            cargo.nome_cargo = nome_cargo || cargo.nome_cargo;
            cargo.descricao = descricao || cargo.descricao;
            cargo.id_nivel_acesso = id_nivel_acesso || cargo.id_nivel_acesso;
            const updatedCargo = yield this.cargoRepository.update(cargo);
            const cargoReturn = {
                cargo: {
                    id_cargo: updatedCargo.id_cargo,
                    nome_cargo: updatedCargo.nome_cargo,
                    descricao: updatedCargo.descricao,
                    nivelAcesso: {
                        id_nivel_acesso: updatedCargo.id_nivel_acesso,
                        titulo_nivel_acesso: nivelacesso.titulo_nivel_acesso,
                        descricao: nivelacesso.descricao,
                        tipo_nivel_acesso: nivelacesso.tipo_nivel_acesso,
                    },
                },
            };
            return cargoReturn;
        });
    }
};
UpdateCargoUseCase = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("CargoRepository")),
    __param(1, tsyringe_1.inject("NivelAcessoRepository")),
    __metadata("design:paramtypes", [Object, Object])
], UpdateCargoUseCase);
exports.UpdateCargoUseCase = UpdateCargoUseCase;
