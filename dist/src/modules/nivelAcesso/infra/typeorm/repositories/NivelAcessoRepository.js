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
exports.NivelAcessoRepository = void 0;
const typeorm_1 = require("typeorm");
const NivelAcesso_1 = require("../entities/NivelAcesso");
class NivelAcessoRepository {
    constructor() {
        this.getManager = typeorm_1.getManager();
        this.repository = typeorm_1.getRepository(NivelAcesso_1.NivelAcesso);
        this.getManager = typeorm_1.getManager();
    }
    // async listCargos(id: string): Promise<Cargo[]> {
    //   const nivelacesso = await getManager().findOne(NivelAcesso, id, {
    //     relations: ["cargos"],
    //   });
    //   return nivelacesso.cargos;
    // }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id);
        });
    }
    listUniqueNivelAcesso(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const uniqueNivelAcessoExiste = yield this.repository.findOne(id);
            return uniqueNivelAcessoExiste;
        });
    }
    findByTipoAcesso(tipo_nivel_acesso) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoAcessoExiste = yield this.repository.findOne({
                tipo_nivel_acesso,
            });
            return tipoAcessoExiste;
        });
    }
    create({ titulo_nivel_acesso, tipo_nivel_acesso, descricao, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const nivelacesso = this.repository.create({
                titulo_nivel_acesso,
                tipo_nivel_acesso,
                descricao,
            });
            yield this.repository.save(nivelacesso);
        });
    }
    update({ id_nivel_acesso, titulo_nivel_acesso, tipo_nivel_acesso, descricao, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const nivelacesso = this.repository.create({
                id_nivel_acesso,
                titulo_nivel_acesso,
                tipo_nivel_acesso,
                descricao,
            });
            yield this.repository.save(nivelacesso);
            return nivelacesso;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const nivelacesso = yield this.repository.find();
            return nivelacesso;
        });
    }
    findByName(titulo_nivel_acesso) {
        return __awaiter(this, void 0, void 0, function* () {
            const nivelacesso = yield this.repository.findOne({
                where: { titulo_nivel_acesso },
            });
            return nivelacesso;
        });
    }
}
exports.NivelAcessoRepository = NivelAcessoRepository;
