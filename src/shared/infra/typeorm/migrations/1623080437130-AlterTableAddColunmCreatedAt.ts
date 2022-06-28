import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterTableAddColunmCreatedAt1623080437130
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "igreja",
      new TableColumn({
        name: "created_at",
        type: "timestamp",
        default: "now()",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("igreja", "created_at");
  }
}
