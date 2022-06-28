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
exports.CreateTableTokensUsuarios1620938592959 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableTokensUsuarios1620938592959 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "users_tokens",
                columns: [
                    {
                        name: "id_users_tokens",
                        type: "varchar(36)",
                        isPrimary: true,
                    },
                    {
                        name: "refresh_token",
                        type: "varchar",
                    },
                    {
                        name: "id_usuario",
                        type: "varchar(36)",
                    },
                    {
                        name: "expires_date",
                        type: "timestamp",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKusuariosTokens",
                        referencedTableName: "usuario",
                        referencedColumnNames: ["id_usuario"],
                        columnNames: ["id_usuario"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("users_tokens");
        });
    }
}
exports.CreateTableTokensUsuarios1620938592959 = CreateTableTokensUsuarios1620938592959;
