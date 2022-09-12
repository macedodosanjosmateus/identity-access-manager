import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateUser1662982573983 implements MigrationInterface {
  name = 'CreateUser1662982573983'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user_entity\` (\`id\` varchar(36) NOT NULL, \`version\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`email\` varchar(255) NOT NULL, \`mobile\` varchar(20) NULL, UNIQUE INDEX \`IDX_415c35b9b3b6fe45a3b065030f\` (\`email\`), UNIQUE INDEX \`IDX_bb7020c9fe5e495b7e542b35ce\` (\`mobile\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX \`IDX_bb7020c9fe5e495b7e542b35ce\` ON \`user_entity\``)
    await queryRunner.query(`DROP INDEX \`IDX_415c35b9b3b6fe45a3b065030f\` ON \`user_entity\``)
    await queryRunner.query(`DROP TABLE \`user_entity\``)
  }
}
