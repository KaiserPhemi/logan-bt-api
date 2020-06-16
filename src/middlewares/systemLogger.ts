// third-party libraries
import Winston, { format } from "winston";

/**
 * @desc logging options
 */
const loggingOptions = {
  file: {
    level: "info",
    filename: "logs/combined.log",
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: true
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: true,
    colorize: true
  }
};

// winston instance
const logger = Winston.createLogger({
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: "DD-MM-YYYY HH:mm:ss"
    }),
    format.simple()
  ),
  transports: [
    new Winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new Winston.transports.File(loggingOptions.file),
    new Winston.transports.Console(loggingOptions.console)
  ],
  exitOnError: false
});

export default logger;
