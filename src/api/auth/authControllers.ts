// third-party libraries
import { Request, Response } from "express";
import bcrypt from "bcrypt";

// helpers
import errorResponse from "../../helpers/errorResponse";
import authToken from "../../helpers/authHelper";

// services
import userService from "../../services/userService";

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
      const existingUser = await userService.fetchUserByEmail(email);
      if (!existingUser) {
        return res.status(404).json({ message: "Invalid email/password" });
      }
      const passwordMatch = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!passwordMatch) {
        return res.status(404).json({
          message: "Invalid email/password"
        });
      }
      const accessToken = await authToken.createAccessToken(
        email,
        existingUser.id
      );
      res.cookie("authorization", accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000
      });
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
