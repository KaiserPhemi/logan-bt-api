// third-party libraries
import "babel-polyfill";
import express from "express";
import dotenv from "dotenv";

// main route
import mainRouter from "./api/index";

// database pool
import pool from "./db/dbConnection";

// middlewares
import appMiddleware from "./middlewares/appMiddleware";
import logger from "./middlewares/systemLogger";

// instantiate app
dotenv.config();
const app = express();
appMiddleware(app);
const PORT = process.env.PORT;

// database connection
(async () => {
  const client = await pool.connect();
  try {
    const response = await client.query('select now() as "Current_Time"');
    logger.info(`"Connected to database at: ${response.rows[0].Current_Time}`);
  } finally {
    client.release();
  }
})().catch((err) => logger.error(err.stack));

// default routes
app.use("/api/v1", mainRouter);
app.get("*", (req, res) => {
  res.status(200).json({
    message: "Welcome to Logan Bug Tracker API"
  });
});

// start app on port
if (!module.parent) {
  try {
    app.listen(PORT, () => {
      logger.info(`App started. Listening on port ${PORT}...`);
    });
  } catch (error) {
    logger.error(error);
  }
}
