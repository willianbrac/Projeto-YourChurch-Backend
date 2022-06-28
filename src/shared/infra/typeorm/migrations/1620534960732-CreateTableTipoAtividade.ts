import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableTipoAtividade1620534960732
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tipo_atividade",
        columns: [
          { name: "id_tipo_atividade", type: "varchar(36)", isPrimary: true },
          { name: "nome_tipo_atividade", type: "varchar" },
          { name: "modalidade_tipo_atividade", type: "varchar" },
          { name: "gera_arrecadacao_tipo_atividade", type: "tinyint" },
          { name: "descricao", type: "varchar" },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tipo_atividade");
  }
}
