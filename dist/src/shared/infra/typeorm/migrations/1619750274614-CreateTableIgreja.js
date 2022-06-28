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
exports.CreateTableIgreja1619471638438 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableIgreja1619471638438 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "igreja",
                columns: [
                    { name: "id_igreja", type: "varchar(36)", isPrimary: true },
                    { name: "nome_igreja", type: "varchar" },
                    { name: "cnpj_igreja", type: "varchar" },
                    { name: "logo_igreja", type: "varchar", isNullable: true },
                    { name: "isMatriz", type: "tinyint" },
                    { name: "quantidade_membro_igreja", type: "int" },
                    { name: "rua_igreja", type: "varchar" },
                    { name: "bairro_igreja", type: "varchar" },
                    { name: "cep_igreja", type: "varchar" },
                    { name: "numero_residencia_igreja", type: "int" },
                    { name: "complemento_residencia_igreja", type: "varchar" },
                    {
                        name: "id_usuario",
                        type: "varchar(36)",
                        isNullable: true,
                    },
                    { name: "cidade_igreja", type: "varchar" },
                    { name: "estado_igreja", type: "varchar" },
                    { name: "pais_igreja", type: "varchar" },
                ],
                foreignKeys: [
                    {
                        name: "FKUsuario",
                        referencedTableName: "usuario",
                        referencedColumnNames: ["id_usuario"],
                        columnNames: ["id_usuario"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("igreja");
        });
    }
}
exports.CreateTableIgreja1619471638438 = CreateTableIgreja1619471638438;
