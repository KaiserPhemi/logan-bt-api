/* eslint-disable @typescript-eslint/no-var-requires */
import config from "../../knexfile";
const environment: string = process.env.NODE_ENV || "development";

module.exports = require("knex")(config[environment]);
