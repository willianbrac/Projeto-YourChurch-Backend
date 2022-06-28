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
exports.CreateTableUsuario1619288772082 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableUsuario1619288772082 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "usuario",
                columns: [
                    { name: "id_usuario", type: "varchar(36)", isPrimary: true },
                    { name: "primeiro_nome_usuario", type: "varchar" },
                    { name: "ultimo_nome_usuario", type: "varchar" },
                    { name: "email_usuario", type: "varchar" },
                    { name: "foto_perfil_usuario", type: "varchar", isNullable: true },
                    { name: "senha_usuario", type: "varchar" },
                    { name: "cpf_usuario", type: "varchar" },
                    {
                        name: "id_cargo",
                        type: "varchar(36)",
                        isNullable: true,
                    },
                    { name: "rua_usuario", type: "varchar" },
                    { name: "bairro_usuario", type: "varchar" },
                    { name: "cep_usuario", type: "varchar" },
                    { name: "numero_residencia_usuario", type: "int" },
                    { name: "complemento_residencia_usuario", type: "varchar" },
                    { name: "cidade_usuario", type: "varchar" },
                    { name: "estado_usuario", type: "varchar" },
                    { name: "pais_usuario", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                ],
                foreignKeys: [
                    {
                        name: "FKCargo",
                        referencedTableName: "cargo",
                        referencedColumnNames: ["id_cargo"],
                        columnNames: ["id_cargo"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("usuario");
        });
    }
}
exports.CreateTableUsuario1619288772082 = CreateTableUsuario1619288772082;
