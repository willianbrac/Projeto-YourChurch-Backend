import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableTokensUsuarios1620938592959
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users_tokens");
  }
}
