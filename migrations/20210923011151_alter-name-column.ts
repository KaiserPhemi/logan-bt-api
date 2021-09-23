/* eslint-disable @typescript-eslint/no-explicit-any */
// third-party libraries
import { Knex } from "knex";

/**
 * Create table
 * @param knex
 * @returns
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("users_table", (table: any) => {
    table.dropUnique("name");
  });
}

/**
 * Drop table
 * @param knex
 * @returns
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("users_table");
}
