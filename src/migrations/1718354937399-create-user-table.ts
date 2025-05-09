import { EntityNameConst } from 'src/constant/entity-name';
import { Gender } from 'src/constant/enum-common';
import { MigrationConst } from 'src/constant/migration';
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateUserTable1718354937399 implements MigrationInterface {
  private userTable = new Table({
    name: EntityNameConst.USER,
    columns: [
      MigrationConst.idPrimaryColumn,
      MigrationConst.createdAtColumn,
      MigrationConst.updatedAtColumn,
      MigrationConst.varcharColumn('username', { isNullable: true, isUnique: true }),
      MigrationConst.varcharColumn('password', { isNullable: true }),
      MigrationConst.varcharColumn('name', { isNullable: true }),
      MigrationConst.intColumn('phone_number', { isNullable: true }),
      MigrationConst.enumColumn('gender', Gender, { isNullable: true }),
      MigrationConst.dateColumn('date_of_birth', { isNullable: true }),
      MigrationConst.varcharColumn('email', { isNullable: true, isUnique: true }),
      MigrationConst.varcharColumn('description', { isNullable: true }),
      MigrationConst.varcharColumn('house_street', { isNullable: true }),
      MigrationConst.varcharColumn('ward', { isNullable: true }),
      MigrationConst.varcharColumn('district', { isNullable: true }),
      MigrationConst.varcharColumn('city', { isNullable: true }),
      MigrationConst.charColumn('address', { isNullable: true }),
      MigrationConst.varcharColumn('avatar', { isNullable: true }),
      MigrationConst.varcharColumn('cover_photo', { isNullable: true }),
      MigrationConst.varcharColumn('facebook_url', { isNullable: true }),
      MigrationConst.booleanColumn('is_super_admin', { default: false }),
      MigrationConst.intColumn('role_id', { isNullable: true }),
      MigrationConst.varcharColumn('slug', { isNullable: true }),
    ],
  });

  private tokenTable = new Table({
    name: EntityNameConst.TOKEN,
    columns: [
      MigrationConst.idPrimaryColumn,
      MigrationConst.createdAtColumn,
      MigrationConst.varcharColumn('name', { isNullable: true }),
      MigrationConst.varcharColumn('code', { isNullable: true }),
    ],
  });

  private userForeignKey: TableForeignKey[] = [
    MigrationConst.foreignKey('role_id', EntityNameConst.ROLE, { onDelete: 'SET NULL' }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.userTable, true);
    await queryRunner.createTable(this.tokenTable, true);
    await queryRunner.createForeignKeys(this.userTable, this.userForeignKey);
  }

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Drop user table.
   * @param queryRunner - TypeORM query runner.
   * @returns - Promise that resolves when the table is dropped.
   */
  /******  b223cea6-9cc9-40e6-9e1c-7de0d18b7587  *******/
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.userTable, this.userForeignKey);
    await queryRunner.dropTable(this.userTable, true);
  }
}
