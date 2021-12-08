// third-party libraries
import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;

// token helper
const authToken = {
  /**
   * generates access token
   * @param email
   * @param userId
   * @returns
   */
  async createAccessToken(email: string, userId: string): Promise<string> {
    return jwt.sign({ email, userId }, secretKey, {
      expiresIn: "1h"
    });
  }

  //   async createRefreshToken(userId: string): Promise<string> {
  //     const refresh = jwt.sign(
  //       { userId },
  //       process.env.JWT_SECRET,
  //       { expiresIn: '7d' }
  //     );
  //     await sessionService.addSession(userId, refresh);
  //     return refresh
  //   }
};

export default authToken;
