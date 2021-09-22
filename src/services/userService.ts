// db config
import db from "../config/knex";

// Service for the "users" table
const userService = {
  /**
   * Fetches all users in the system
   * @returns
   */
  async fetchAllUsers(): Promise<unknown> {
    try {
      const allUsers = await db("users_table").select("*");
      return allUsers;
    } catch (error) {
      return error;
    }
  },

  /**
   * Fetch a user by Id
   * @param id
   * @returns
   */
  async fetchUser(id: number): Promise<unknown> {
    try {
      const fetchedUser = await db("users_table").select("*").where({ id });
      return fetchedUser;
    } catch (error) {
      return error;
    }
  },

  async fetchUserByEmail(email: string): Promise<unknown> {
    try {
      const savedUser = await db("users_table").select("*").where({ email });
      return savedUser;
    } catch (error) {
      return error;
    }
  },

  /**
   * Add a new user to the table
   * @param name
   * @param email
   * @param password
   * @returns
   */
  async addUser(
    name: string,
    email: string,
    password: string
  ): Promise<unknown> {
    try {
      const newUser = await db("users_table")
        .insert({
          name,
          email,
          password
        })
        .returning("*");
      return newUser;
    } catch (error) {
      return error;
    }
  },

  /**
   * Delete a user
   * @param id
   * @returns
   */
  async deleteUser(id: number): Promise<unknown> {
    try {
      const deletedUser = await db("users_table")
        .where({ id })
        .update({ is_deleted: false });
      return deletedUser;
    } catch (error) {
      return error;
    }
  }
};

export default userService;
