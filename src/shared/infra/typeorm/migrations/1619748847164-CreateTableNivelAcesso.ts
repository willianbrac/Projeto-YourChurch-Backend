import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableNivelAcesso1619233211612 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "nivel_acesso",
        columns: [
          { name: "id_nivel_acesso", type: "varchar(36)", isPrimary: true },
          { name: "titulo_nivel_acesso", type: "varchar" },
          { name: "tipo_nivel_acesso", type: "int" },
          { name: "descricao", type: "varchar" },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("nivel_acesso");
  }
}
