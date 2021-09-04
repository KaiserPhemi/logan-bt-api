// third-party libraries
import { Request, Response } from "express";

// database connection
import pool from "../../db/dbConnection";
import { selectAll, create } from "../../db/query";

// services
import userService from "../../services/userService";

// User controller
const userController = {
  /**
   * @desc Returns all users in the database
   * @param req
   * @param res
   */
  async getAllUsers(req: Request, res: Response): Promise<unknown> {
    try {
      // fetch all users
      const users = await userService.fetchAllUsers();
      return res.status(200).json({
        message: "All users fetched successfully.",
        users
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal error",
        error
      });
    }
  },

  /**
   * Adds a new user
   * @param req
   * @param res
   * @returns
   */
  async addUser(req: Request, res: Response): Promise<unknown> {
    try {
      return;
    } catch (error) {
      return res.status(500).json({
        message: "Internal error",
        error
      });
    }
  }
};

export default userController;
