import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// Third-party libraries
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  /**
   * Constructor
   * @param jwtService
   */
  constructor(private readonly jwtService: JwtService) {}

  /**
   * Hash the password
   * @param password
   */
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  /**
   * Compares password and hash
   * @param password
   * @param hash
   * @returns
   */
  comparePassword(password: string, hash: string): any | boolean {
    return bcrypt.compare(password, hash);
  }
}
