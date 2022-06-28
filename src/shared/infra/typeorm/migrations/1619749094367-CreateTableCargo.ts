import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCargo1619746778841 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("cargo");
  }
}
