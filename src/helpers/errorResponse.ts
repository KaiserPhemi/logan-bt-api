// third-party libraries
import { Response, ErrorRequestHandler } from "express";

/**
 * Hanldes server error responses
 */
export default (error: ErrorRequestHandler, res: Response): any => {
  return res.status(500).json({
    message: "Internal server error.",
    error
  });
};
