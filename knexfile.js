/* eslint-disable no-undef */
// Update with your config settings.
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME
    },
    pool: {
      min: 1,
      max: 50
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations"
    }
  }
};
