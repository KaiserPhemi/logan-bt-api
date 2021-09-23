/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// third-party libraries
import { Request, Response, NextFunction } from "express";

/**
 * Validates input from client
 * @param validation
 * @returns
 */
const validateInput = (validation: any) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<unknown> => {
    const checkInput = await validation.validate({ ...req.body });
    if (!checkInput.error) {
      next();
    } else {
      return res.status(400).json({
        message: "Invalid input.",
        error: checkInput.error.details[0].message || "Invalid Input"
      });
    }
  };
};

export default validateInput;
