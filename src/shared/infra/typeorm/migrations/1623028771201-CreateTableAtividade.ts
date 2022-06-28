import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableAtividade1623028771201 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "atividade",
        columns: [
          { name: "id_atividade", type: "varchar(36)", isPrimary: true },
          { name: "id_tipo_atividade", type: "varchar(36)", isNullable: true },
          { name: "id_igreja", type: "varchar(36)", isNullable: true },
          { name: "data_atividade", type: "timestamp" },
          { name: "hora_inicio_atividade", type: "time" },
          { name: "hora_termino_atividade", type: "time" },
          { name: "quantidade_visitantes_atividade", type: "int" },
          { name: "quantidade_membros_atividade", type: "int" },
          { name: "tema_atividade", type: "varchar" },
          { name: "responsavel_atividade", type: "varchar" },
          { name: "dizimo_atividade", type: "float", isNullable: true },
          { name: "oferta_atividade", type: "float", isNullable: true },
          { name: "num_reconciliacao_atividade", type: "int" },
          { name: "num_decisoes_atividade", type: "int" },
          { name: "preleitor_atividade", type: "varchar" },
          { name: "observacao_atividade", type: "varchar" },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],

        foreignKeys: [
          {
            name: "FKTipoAtividade",
            referencedTableName: "tipo_atividade",
            referencedColumnNames: ["id_tipo_atividade"],
            columnNames: ["id_tipo_atividade"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKTIgreja",
            referencedTableName: "igreja",
            referencedColumnNames: ["id_igreja"],
            columnNames: ["id_igreja"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("atividade");
  }
}
