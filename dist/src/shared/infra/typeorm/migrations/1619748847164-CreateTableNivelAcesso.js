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
exports.CreateTableNivelAcesso1619233211612 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableNivelAcesso1619233211612 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "nivel_acesso",
                columns: [
                    { name: "id_nivel_acesso", type: "varchar(36)", isPrimary: true },
                    { name: "titulo_nivel_acesso", type: "varchar" },
                    { name: "tipo_nivel_acesso", type: "int" },
                    { name: "descricao", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("nivel_acesso");
        });
    }
}
exports.CreateTableNivelAcesso1619233211612 = CreateTableNivelAcesso1619233211612;
