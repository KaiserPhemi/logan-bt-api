import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// Third-party libraries
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  /**
   * Constructo
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
}
