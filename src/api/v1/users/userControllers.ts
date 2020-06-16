/**
 * @desc User controllers
 */
const userController = {
  /**
   * @desc Returns all users in the database
   * @param req
   * @param res
   */
  async getAllUsers(req, res) {
    return res.body;
  },

  /**
   * @desc creates a user
   * @param req
   * @param res
   */
  async createUser(req: { body: any }, res: any) {
    const { body } = req;
    return res.status(200).json({
      message: "User created successfully.",
      body
    });
  }
};
