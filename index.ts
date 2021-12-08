// third-party libraries
import dotenv from "dotenv";

// middlewares
import logger from "./src/middlewares/systemLogger";

// app module
import app from "./src/app";

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.info(`API running. Listening on port ${PORT}...`);
});

process.on("SIGINT", () => {
  logger.info("Server shutting down");
  logger.info("Server shut down success");
  process.exit(0);
});
