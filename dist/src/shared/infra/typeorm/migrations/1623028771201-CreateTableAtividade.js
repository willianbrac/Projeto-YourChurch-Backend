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
exports.CreateTableAtividade1623028771201 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableAtividade1623028771201 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "atividade",
                columns: [
                    { name: "id_atividade", type: "varchar(36)", isPrimary: true },
                    { name: "id_tipo_atividade", type: "varchar(36)", isNullable: true },
                    { name: "id_igreja", type: "varchar(36)", isNullable: true },
                    { name: "data_atividade", type: "timestamp" },
                    { name: "hora_inicio_atividade", type: "time" },
                    { name: "hora_termino_atividade", type: "time" },
                    { name: "quantidade_visitantes_atividade", type: "int" },
                    { name: "quantidade_membros_atividade", type: "int" },
                    { name: "tema_atividade", type: "varchar" },
                    { name: "responsavel_atividade", type: "varchar" },
                    { name: "dizimo_atividade", type: "float", isNullable: true },
                    { name: "oferta_atividade", type: "float", isNullable: true },
                    { name: "num_reconciliacao_atividade", type: "int" },
                    { name: "num_decisoes_atividade", type: "int" },
                    { name: "preleitor_atividade", type: "varchar" },
                    { name: "observacao_atividade", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                ],
                foreignKeys: [
                    {
                        name: "FKTipoAtividade",
                        referencedTableName: "tipo_atividade",
                        referencedColumnNames: ["id_tipo_atividade"],
                        columnNames: ["id_tipo_atividade"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKTIgreja",
                        referencedTableName: "igreja",
                        referencedColumnNames: ["id_igreja"],
                        columnNames: ["id_igreja"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("atividade");
        });
    }
}
exports.CreateTableAtividade1623028771201 = CreateTableAtividade1623028771201;
