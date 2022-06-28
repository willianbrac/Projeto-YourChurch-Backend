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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtividadeRepository = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const typeorm_1 = require("typeorm");
const Atividade_1 = require("../entities/Atividade");
dayjs_1.default.extend(utc_1.default);
class AtividadeRepository {
    constructor() {
        this.repository = typeorm_1.getRepository(Atividade_1.Atividade);
    }
    update({ id_atividade, id_tipo_atividade, id_igreja, data_atividade, hora_inicio_atividade, hora_termino_atividade, quantidade_visitantes_atividade, quantidade_membros_atividade, tema_atividade, responsavel_atividade, dizimo_atividade, oferta_atividade, num_reconciliacao_atividade, num_decisoes_atividade, preleitor_atividade, observacao_atividade, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const atividade = this.repository.create({
                id_atividade,
                id_tipo_atividade,
                id_igreja,
                data_atividade,
                hora_inicio_atividade,
                hora_termino_atividade,
                quantidade_visitantes_atividade,
                quantidade_membros_atividade,
                tema_atividade,
                responsavel_atividade,
                dizimo_atividade,
                oferta_atividade,
                num_reconciliacao_atividade,
                num_decisoes_atividade,
                preleitor_atividade,
                observacao_atividade,
            });
            yield this.repository.save(atividade);
            return atividade;
        });
    }
    create({ id_atividade, id_tipo_atividade, id_igreja, data_atividade, hora_inicio_atividade, hora_termino_atividade, quantidade_visitantes_atividade, quantidade_membros_atividade, tema_atividade, responsavel_atividade, dizimo_atividade, oferta_atividade, num_reconciliacao_atividade, num_decisoes_atividade, preleitor_atividade, observacao_atividade, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const atividade = this.repository.create({
                id_atividade,
                id_tipo_atividade,
                id_igreja,
                data_atividade,
                hora_inicio_atividade,
                hora_termino_atividade,
                quantidade_visitantes_atividade,
                quantidade_membros_atividade,
                tema_atividade,
                responsavel_atividade,
                dizimo_atividade,
                oferta_atividade,
                num_reconciliacao_atividade,
                num_decisoes_atividade,
                preleitor_atividade,
                observacao_atividade,
            });
            yield this.repository.save(atividade);
        });
    }
    findById(id_atividade) {
        return __awaiter(this, void 0, void 0, function* () {
            const atividade = yield this.repository.findOne(id_atividade, {
                relations: ["igreja", "tipoAtividade"],
            });
            return atividade;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const atividades = yield this.repository.find({
                relations: ["igreja", "tipoAtividade"],
            });
            return atividades;
        });
    }
    delete(id_atividade) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id_atividade);
        });
    }
    listAtividadesRelatorio(id_igreja, data_inicio, data_final, id_tipo_atividade) {
        return __awaiter(this, void 0, void 0, function* () {
            const mesAtual = new Date().getUTCMonth() + 1;
            const query = yield this.repository
                .createQueryBuilder("a")
                .leftJoinAndSelect("a.igreja", "igreja")
                .leftJoinAndSelect("a.tipoAtividade", "tipo_atividade")
                .where("a.id_igreja = :id_igreja", { id_igreja });
            if (data_inicio || data_final) {
                query.andWhere("a.data_atividade >= :data_inicio", {
                    data_inicio,
                });
                query.andWhere("a.data_atividade <= :data_final", {
                    data_final,
                });
            }
            if (id_tipo_atividade) {
                query.andWhere("a.id_tipo_atividade = :id_tipo_atividade", {
                    id_tipo_atividade,
                });
            }
            if (!(data_inicio || data_final)) {
                query.andWhere("MONTH(data_atividade) = :mesAtual", {
                    mesAtual,
                });
                query.orderBy("data_atividade");
            }
            const atividades = yield query.orderBy("data_atividade").getMany();
            return atividades;
        });
    }
    isCountAtividades(id_igreja) {
        return __awaiter(this, void 0, void 0, function* () {
            const mesAtual = new Date().getUTCMonth() + 1;
            const query = yield this.repository
                .createQueryBuilder("a")
                .where("a.id_igreja = :id_igreja", { id_igreja })
                .andWhere("MONTH(a.data_atividade) = :mesAtual", { mesAtual });
            if (!id_igreja) {
                query.where("MONTH(a.data_atividade) = :mesAtual", { mesAtual });
            }
            const countAtividades = yield query.orderBy("data_atividade").getCount();
            return countAtividades;
        });
    }
    isCountValues(id_igreja) {
        return __awaiter(this, void 0, void 0, function* () {
            const mesAtual = new Date().getUTCMonth() + 1;
            const query = yield this.repository
                .createQueryBuilder("a")
                .select("SUM(oferta_atividade + dizimo_atividade)", `soma_total_arrecadacao`)
                .where("a.id_igreja = :id_igreja", { id_igreja })
                .andWhere("MONTH(a.data_atividade) = :mesAtual", { mesAtual });
            if (!id_igreja) {
                query
                    .select("SUM(a.oferta_atividade + a.dizimo_atividade)", "soma_total_arrecadacao")
                    .where("MONTH(a.data_atividade) = :mesAtual", { mesAtual })
                    .groupBy("MONTH(a.data_atividade)");
            }
            const atividades = yield query.getRawOne();
            return atividades;
        });
    }
    isValuesGrafico(id_igreja) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryRelatorio = yield this.repository
                .createQueryBuilder("a")
                .select("COUNT(a.id_atividade )", "atividades")
                .addSelect("SUM(a.oferta_atividade + a.dizimo_atividade)", "total")
                .addSelect("MONTH(a.data_atividade)", "mes");
            if (id_igreja) {
                const grafico = yield queryRelatorio
                    .andWhere("a.id_igreja = :id_igreja", { id_igreja })
                    .groupBy("MONTH(a.data_atividade)")
                    .getRawMany();
                return grafico;
            }
            const grafico = yield queryRelatorio
                .groupBy("MONTH(a.data_atividade)")
                .getRawMany();
            return grafico;
        });
    }
}
exports.AtividadeRepository = AtividadeRepository;
