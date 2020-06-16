import { Pool } from "pg";

// db config
import dbConfig from "./dbConfig";

// create pool of connection
const pool = new Pool(dbConfig);

export default pool;
