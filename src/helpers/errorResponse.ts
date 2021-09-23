/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// third-party libraries
import { Response } from "express";

// Handles server error response
export default (error: any, res: Response): any => {
  return res.status(500).json({
    message: "Internal server error.",
    error
  });
};
