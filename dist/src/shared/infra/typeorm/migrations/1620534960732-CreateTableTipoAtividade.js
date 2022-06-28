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
exports.CreateTableTipoAtividade1620534960732 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableTipoAtividade1620534960732 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "tipo_atividade",
                columns: [
                    { name: "id_tipo_atividade", type: "varchar(36)", isPrimary: true },
                    { name: "nome_tipo_atividade", type: "varchar" },
                    { name: "modalidade_tipo_atividade", type: "varchar" },
                    { name: "gera_arrecadacao_tipo_atividade", type: "tinyint" },
                    { name: "descricao", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("tipo_atividade");
        });
    }
}
exports.CreateTableTipoAtividade1620534960732 = CreateTableTipoAtividade1620534960732;
