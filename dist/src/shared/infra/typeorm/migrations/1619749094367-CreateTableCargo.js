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
exports.CreateTableCargo1619746778841 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableCargo1619746778841 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            queryRunner.createTable(new typeorm_1.Table({
                name: "cargo",
                columns: [
                    { name: "id_cargo", type: "varchar(36)", isPrimary: true },
                    { name: "nome_cargo", type: "varchar" },
                    { name: "descricao", type: "varchar" },
                    {
                        name: "id_nivel_acesso",
                        type: "varchar(36)",
                        isNullable: true,
                    },
                    { name: "created_at", type: "timestamp", default: "now()" },
                ],
                foreignKeys: [
                    {
                        name: "FKnivel_acesso",
                        referencedTableName: "nivel_acesso",
                        referencedColumnNames: ["id_nivel_acesso"],
                        columnNames: ["id_nivel_acesso"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            queryRunner.dropTable("cargo");
        });
    }
}
exports.CreateTableCargo1619746778841 = CreateTableCargo1619746778841;
