import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AlterTableAddColunmIgrejaMatriz1621385261022
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "igreja",
      new TableColumn({
        name: "id_igreja_matriz",
        type: "varchar(36)",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "igreja",
      new TableForeignKey({
        name: "FKIgrejaMatriz",
        referencedTableName: "igreja",
        referencedColumnNames: ["id_igreja"],
        columnNames: ["id_igreja_matriz"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("igreja", "FKIgrejaMatriz");
    await queryRunner.dropColumn("igreja", "id_igreja_matriz");
  }
}
