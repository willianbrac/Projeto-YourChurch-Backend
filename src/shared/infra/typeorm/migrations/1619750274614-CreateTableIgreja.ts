import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableIgreja1619471638438 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("igreja");
  }
}
