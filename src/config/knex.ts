/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// third-party modules
import knex from "knex";

// database config
import config from "../../knexfile";

const environment = process.env.NODE_ENV || "development";
const db = knex(config[environment]);

export default db;
