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
exports.IgrejaRepository = void 0;
const typeorm_1 = require("typeorm");
const Igreja_1 = require("../entities/Igreja");
class IgrejaRepository {
    constructor() {
        this.repository = typeorm_1.getRepository(Igreja_1.Igreja);
    }
    isCountMembros(id_igreja) {
        return __awaiter(this, void 0, void 0, function* () {
            const mesAtual = new Date().getUTCMonth() + 1;
            const membros = yield this.repository
                .createQueryBuilder("i")
                .select("i.quantidade_membro_igreja", `total`)
                .where("i.id_igreja = :id_igreja", { id_igreja });
            if (!id_igreja) {
                membros
                    .select("SUM(i.quantidade_membro_igreja)", `total`)
                    .where("MONTH(i.created_at) = :mesAtual", { mesAtual });
            }
            const list = yield membros.groupBy("MONTH(i.created_at)").getRawOne();
            return list;
        });
    }
    update({ id_igreja, nome_igreja, cnpj_igreja, logo_igreja, isMatriz, quantidade_membro_igreja, rua_igreja, bairro_igreja, cep_igreja, numero_residencia_igreja, complemento_residencia_igreja, id_usuario, cidade_igreja, estado_igreja, pais_igreja, id_igreja_matriz, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const igreja = this.repository.create({
                id_igreja,
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
            yield this.repository.save(igreja);
            return igreja;
        });
    }
    create({ id_igreja, nome_igreja, cnpj_igreja, logo_igreja, isMatriz, quantidade_membro_igreja, rua_igreja, bairro_igreja, cep_igreja, numero_residencia_igreja, complemento_residencia_igreja, id_usuario, cidade_igreja, estado_igreja, pais_igreja, id_igreja_matriz, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const igreja = this.repository.create({
                id_igreja,
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
            yield this.repository.save(igreja);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const igreja = yield this.repository.findOne(id, {
                relations: ["usuario"],
            });
            return igreja;
        });
    }
    findByName(nome_igreja) {
        return __awaiter(this, void 0, void 0, function* () {
            const nomeIgreja = yield this.repository.findOne({ nome_igreja });
            return nomeIgreja;
        });
    }
    findByCNPJ(cnpj) {
        return __awaiter(this, void 0, void 0, function* () {
            const cnpjIgreja = yield this.repository.findOne(cnpj);
            return cnpjIgreja;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const igrejas = this.repository.find({
                relations: ["usuario"],
            });
            return igrejas;
        });
    }
    findUsuarioIgreja(id_usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const igreja = yield this.repository.findOne({ id_usuario });
            return igreja;
            // const queryIgreja = await this.repository
            //   .createQueryBuilder()
            //   .select("igreja")
            //   .from(Igreja, "igreja")
            //   .where("igreja.id_usuario = :id_usuario", { id_usuario })
            //   .getOne();
            // return queryIgreja;
        });
    }
    delete(id_igreja) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id_igreja);
        });
    }
    findIgrejaMatriz() {
        return __awaiter(this, void 0, void 0, function* () {
            const igreja = yield this.repository.findOne({ isMatriz: true });
            return igreja;
        });
    }
}
exports.IgrejaRepository = IgrejaRepository;
