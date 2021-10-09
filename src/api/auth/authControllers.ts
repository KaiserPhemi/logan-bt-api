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
  async loginUser(req: Request, res: Response): Promise<unknown> {
    const { email, password } = req.body;
    try {
      // TODO check if user exist with email
      // TODO comapre password
      // TODO generate access token and refresh token
      // TODO return user details with token
      return res.status(200).json({
        message: "User logged in successfully."
      });
    } catch (error) {
      return errorResponse(error, res);
    }
  },

  /**
   * Logs out user
   * @param req
   * @param res
   * @returns
   */
  async logout(req: Request, res: Response): Promise<unknown> {
    try {
      // TODO get user ID
      // TODO delete refresh token
      // TODO set refresh token to blank
      return res.status(200).json({
        message: "User logged out successfully."
      });
    } catch (error) {
      return errorResponse(error, res);
    }
  }
};

export default authController;
