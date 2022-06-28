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
exports.TipoAtividadeRepository = void 0;
const typeorm_1 = require("typeorm");
const TipoAtividade_1 = require("../entities/TipoAtividade");
class TipoAtividadeRepository {
    constructor() {
        this.repository = typeorm_1.getRepository(TipoAtividade_1.TipoAtividade);
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoAtividade = yield this.repository.findOne(id, {
                relations: ["atividades"],
            });
            return tipoAtividade;
        });
    }
    findByModalidade(modalidade_tipo_atividade) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoModalidadeExiste = yield this.repository.findOne({
                modalidade_tipo_atividade,
            });
            return tipoModalidadeExiste;
        });
    }
    create({ nome_tipo_atividade, modalidade_tipo_atividade, gera_arrecadacao_tipo_atividade, descricao, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoatividde = this.repository.create({
                nome_tipo_atividade,
                modalidade_tipo_atividade,
                gera_arrecadacao_tipo_atividade,
                descricao,
            });
            yield this.repository.save(tipoatividde);
        });
    }
    update({ id_tipo_atividade, nome_tipo_atividade, modalidade_tipo_atividade, gera_arrecadacao_tipo_atividade, descricao, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoatividade = this.repository.create({
                id_tipo_atividade,
                nome_tipo_atividade,
                modalidade_tipo_atividade,
                gera_arrecadacao_tipo_atividade,
                descricao,
            });
            yield this.repository.save(tipoatividade);
            return tipoatividade;
        });
    }
    findByName(nome_tipo_atividade) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoatividade = yield this.repository.findOne({
                where: { nome_tipo_atividade },
            });
            return tipoatividade;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoatividadde = yield this.repository.find({
                relations: ["atividades"],
            });
            return tipoatividadde;
        });
    }
}
exports.TipoAtividadeRepository = TipoAtividadeRepository;
