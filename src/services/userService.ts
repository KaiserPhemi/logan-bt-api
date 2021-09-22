// TODO Import modules
// Service for the "users" table
const userService = {
  /**
   * Fetches all users in the system
   * @returns
   */
  async fetchAllUsers(): Promise<any> {
    try {
      // TO_DO connect db and fetch all users
      return;
    } catch (error) {
      return error;
    }
  },

  /**
   * Fetch a user by Id
   * @param id
   * @returns
   */
  async fetchUser(id: number): Promise<any> {
    try {
      // TO_DO fetch user by id
      return;
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
  async addUser(name: string, email: string, password: string): Promise<any> {
    try {
      // TO-DO Add a new user to the table
      return;
    } catch (error) {
      return error;
    }
  }
};

export default userService;
