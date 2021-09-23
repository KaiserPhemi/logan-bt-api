// third-party libraries
import "babel-polyfill";
import express from "express";
import dotenv from "dotenv";

// main route
import mainRouter from "./api/index";

// middlewares
import appMiddleware from "./middlewares/appMiddleware";
import logger from "./middlewares/systemLogger";

// instantiate app
dotenv.config();
const app = express();
appMiddleware(app);
const PORT = process.env.PORT;

// default routes
app.use("/api/v1", mainRouter);
app.get("*", (req, res) => {
  res.status(200).json({
    message: "Welcome to Logan Bug Tracker API"
  });
});

// start app on port
app.listen(PORT, () => {
  logger.info(`App started. Listening on port ${PORT}...`);
});

process.on("SIGINT", () => {
  logger.info("Server shutting down");
  logger.info("Server shut down success");
  process.exit(0);
});

export default app;
