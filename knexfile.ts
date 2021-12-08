/* eslint-disable @typescript-eslint/no-explicit-any */
// Update with your config settings.
const dbConfig: { [key: string]: any } = {
  test: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.TEST_DB_NAME
    },
    pool: {
      min: 2,
      max: 50
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations"
    }
  },
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

export default dbConfig;
