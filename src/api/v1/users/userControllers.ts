// database connection
import pool from "../../../db/dbConnection";
import { selectAll, create } from "../../../db/query";

// middleware

/**
 * @desc User controllers
 */
const userController = {
  /**
   * @desc Returns all users in the database
   * @param req
   * @param res
   */
  async getAllUsers(req: unknown, res: any): Promise<unknown> {
    let allUsers;
    try {
      allUsers = await pool.query(selectAll(`user_account`));
      return res.status(200).json({
        message: "All users retrieved."
        // allUsers
      });
    } catch (error) {
      return res.status(404).json({
        message: "Internal error",
        error
      });
    }
  },

  /**
   * @desc creates a user
   * @param req
   * @param res
   */
  async createUser(req: { body: any }, res: any): Promise<unknown> {
    const { body } = req;
    let createdUser;
    try {
      createdUser = await pool.query(create("user_account", body));
      return res.status(200).json({
        message: "User created successfully.",
        createdUser
      });
    } catch (error) {
      return res.status(403).json({
        message: "An internal error",
        error
      });
    }
  }
};

export default userController;
