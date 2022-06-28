import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsuario1619288772082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("usuario");
  }
}
