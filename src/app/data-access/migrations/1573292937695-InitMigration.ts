import {MigrationInterface, QueryRunner} from "typeorm";

export class InitMigration1573292937695 implements MigrationInterface {
    name = 'InitMigration1573292937695'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`, undefined);
        await queryRunner.query(`CREATE TABLE "fragments" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "content" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`, undefined);
        await queryRunner.query(`CREATE TABLE "points" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "content" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`, undefined);
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`, undefined);
        await queryRunner.query(`CREATE TABLE "points_categories_categories" ("pointsId" integer NOT NULL, "categoriesId" integer NOT NULL, PRIMARY KEY ("pointsId", "categoriesId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ac59ea64340b797b6dfad1bc14" ON "points_categories_categories" ("pointsId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_6e79f44b8ca3d5cc770ae6bc7f" ON "points_categories_categories" ("categoriesId") `, undefined);
        await queryRunner.query(`CREATE TABLE "points_fragments_fragments" ("pointsId" integer NOT NULL, "fragmentsId" integer NOT NULL, PRIMARY KEY ("pointsId", "fragmentsId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_e2910b45f73385a0726e110de0" ON "points_fragments_fragments" ("pointsId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_a654943d0f277f71e0ee58c0af" ON "points_fragments_fragments" ("fragmentsId") `, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ac59ea64340b797b6dfad1bc14"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_6e79f44b8ca3d5cc770ae6bc7f"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_points_categories_categories" ("pointsId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "FK_ac59ea64340b797b6dfad1bc14d" FOREIGN KEY ("pointsId") REFERENCES "points" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_6e79f44b8ca3d5cc770ae6bc7f0" FOREIGN KEY ("categoriesId") REFERENCES "categories" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("pointsId", "categoriesId"))`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_points_categories_categories"("pointsId", "categoriesId") SELECT "pointsId", "categoriesId" FROM "points_categories_categories"`, undefined);
        await queryRunner.query(`DROP TABLE "points_categories_categories"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_points_categories_categories" RENAME TO "points_categories_categories"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ac59ea64340b797b6dfad1bc14" ON "points_categories_categories" ("pointsId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_6e79f44b8ca3d5cc770ae6bc7f" ON "points_categories_categories" ("categoriesId") `, undefined);
        await queryRunner.query(`DROP INDEX "IDX_e2910b45f73385a0726e110de0"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_a654943d0f277f71e0ee58c0af"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_points_fragments_fragments" ("pointsId" integer NOT NULL, "fragmentsId" integer NOT NULL, CONSTRAINT "FK_e2910b45f73385a0726e110de0b" FOREIGN KEY ("pointsId") REFERENCES "points" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a654943d0f277f71e0ee58c0afb" FOREIGN KEY ("fragmentsId") REFERENCES "fragments" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("pointsId", "fragmentsId"))`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_points_fragments_fragments"("pointsId", "fragmentsId") SELECT "pointsId", "fragmentsId" FROM "points_fragments_fragments"`, undefined);
        await queryRunner.query(`DROP TABLE "points_fragments_fragments"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_points_fragments_fragments" RENAME TO "points_fragments_fragments"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_e2910b45f73385a0726e110de0" ON "points_fragments_fragments" ("pointsId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_a654943d0f277f71e0ee58c0af" ON "points_fragments_fragments" ("fragmentsId") `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_a654943d0f277f71e0ee58c0af"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_e2910b45f73385a0726e110de0"`, undefined);
        await queryRunner.query(`ALTER TABLE "points_fragments_fragments" RENAME TO "temporary_points_fragments_fragments"`, undefined);
        await queryRunner.query(`CREATE TABLE "points_fragments_fragments" ("pointsId" integer NOT NULL, "fragmentsId" integer NOT NULL, PRIMARY KEY ("pointsId", "fragmentsId"))`, undefined);
        await queryRunner.query(`INSERT INTO "points_fragments_fragments"("pointsId", "fragmentsId") SELECT "pointsId", "fragmentsId" FROM "temporary_points_fragments_fragments"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_points_fragments_fragments"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_a654943d0f277f71e0ee58c0af" ON "points_fragments_fragments" ("fragmentsId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_e2910b45f73385a0726e110de0" ON "points_fragments_fragments" ("pointsId") `, undefined);
        await queryRunner.query(`DROP INDEX "IDX_6e79f44b8ca3d5cc770ae6bc7f"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ac59ea64340b797b6dfad1bc14"`, undefined);
        await queryRunner.query(`ALTER TABLE "points_categories_categories" RENAME TO "temporary_points_categories_categories"`, undefined);
        await queryRunner.query(`CREATE TABLE "points_categories_categories" ("pointsId" integer NOT NULL, "categoriesId" integer NOT NULL, PRIMARY KEY ("pointsId", "categoriesId"))`, undefined);
        await queryRunner.query(`INSERT INTO "points_categories_categories"("pointsId", "categoriesId") SELECT "pointsId", "categoriesId" FROM "temporary_points_categories_categories"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_points_categories_categories"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_6e79f44b8ca3d5cc770ae6bc7f" ON "points_categories_categories" ("categoriesId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ac59ea64340b797b6dfad1bc14" ON "points_categories_categories" ("pointsId") `, undefined);
        await queryRunner.query(`DROP INDEX "IDX_a654943d0f277f71e0ee58c0af"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_e2910b45f73385a0726e110de0"`, undefined);
        await queryRunner.query(`DROP TABLE "points_fragments_fragments"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_6e79f44b8ca3d5cc770ae6bc7f"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ac59ea64340b797b6dfad1bc14"`, undefined);
        await queryRunner.query(`DROP TABLE "points_categories_categories"`, undefined);
        await queryRunner.query(`DROP TABLE "users"`, undefined);
        await queryRunner.query(`DROP TABLE "points"`, undefined);
        await queryRunner.query(`DROP TABLE "fragments"`, undefined);
        await queryRunner.query(`DROP TABLE "categories"`, undefined);
    }

}
