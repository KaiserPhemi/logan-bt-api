// third-party libraries
import { Request, Response } from "express";

// helpers
import errorResponse from "../../helpers/errorResponse";

// handles authentication
const authController = {
  /**
   * Login a user
   * @param req
   * @param res
   */
  async loginUser(req: Request, res: Response): Promise<any> {
    try {
      return res.status(200).json({
        message: "User logged in successfully."
      });
    } catch (error) {
      return errorResponse(error, res);
    }
  }
};

export default authController;
