// Nest libraries
import { Injectable } from '@nestjs/common';

// Nest libraries
import { PassportStrategy } from '@nestjs/passport';

// third-party libraries
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  /**
   * Constructor
   */
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  /**
   * Validates token
   * @param payload
   * @returns
   */
  async validate(payload: any) {
    return payload;
  }
}
