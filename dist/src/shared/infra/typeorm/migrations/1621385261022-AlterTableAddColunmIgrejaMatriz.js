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
exports.AlterTableAddColunmIgrejaMatriz1621385261022 = void 0;
const typeorm_1 = require("typeorm");
class AlterTableAddColunmIgrejaMatriz1621385261022 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.addColumn("igreja", new typeorm_1.TableColumn({
                name: "id_igreja_matriz",
                type: "varchar(36)",
                isNullable: true,
            }));
            yield queryRunner.createForeignKey("igreja", new typeorm_1.TableForeignKey({
                name: "FKIgrejaMatriz",
                referencedTableName: "igreja",
                referencedColumnNames: ["id_igreja"],
                columnNames: ["id_igreja_matriz"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey("igreja", "FKIgrejaMatriz");
            yield queryRunner.dropColumn("igreja", "id_igreja_matriz");
        });
    }
}
exports.AlterTableAddColunmIgrejaMatriz1621385261022 = AlterTableAddColunmIgrejaMatriz1621385261022;
