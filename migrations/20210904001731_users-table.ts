/* eslint-disable @typescript-eslint/no-explicit-any */
// third-party libraries
import { Knex } from "knex";

/**
 *
 * @param knex Create table
 * @returns
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users_table", (table: any) => {
    table.increments("id").primary();
    table.uuid("public_id").defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("name").notNullable().unique();
    table.string("email").notNullable().unique();
    table.string("password").notNullable().unique();
    table.timestamps(true, true);
  });
}

/**
 * Revert
 * @param knex
 * @returns
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("users_table");
}
