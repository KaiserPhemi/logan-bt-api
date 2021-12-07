// third-party libraries
import { Request, Response } from "express";
import bcrypt from "bcrypt";

// services
import userService from "../../services/userService";

// helper
import errorReponse from "../../helpers/errorResponse";

// constant
const SALT_ROUNDS = 10;

// User controller
const userController = {
  /**
   * @desc Returns all users in the database
   * @param req
   * @param res
   */
  async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await userService.fetchAllUsers();
      return res.status(200).json({
        message: "All users fetched successfully.",
        users
      });
    } catch (error) {
      return errorReponse(error, res);
    }
  },

  /**
   * Adds a new user
   * @param req
   * @param res
   * @returns
   */
  async addUser(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;
    let { password } = req.body;
    try {
      const existingUser: any[] = await userService.fetchUserByEmail(email);
      if (existingUser.length > 0) {
        return res.status(400).json({
          message: "User already exist"
        });
      }
      password = await bcrypt.hash(password, SALT_ROUNDS);
      const newUser = await userService.addUser(name, email, password);

      // TODO send welcome email

      return res.status(201).json({
        message: "User added successfully.",
        user: newUser
      });
    } catch (error) {
      return errorReponse(error, res);
    }
  },

  /**
   * Verify users' email/registration
   * @param req
   * @param res
   * @returns
   */
  async verifyUser(req: Request, res: Response): Promise<Response> {
    try {
      // TODO get token
      // TODO verify token
      // TODO verify email
      // TODO delete token
      // TODO send response
      return res.status(200).json({ message: "User verified" });
    } catch (error) {
      return errorReponse(error, res);
    }
  }
};

export default userController;
