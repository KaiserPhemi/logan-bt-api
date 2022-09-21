// Nest libraries
import { Controller, Body, Res, Post, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

// Third-party libraries
import { Response } from 'express';

// service
import { AuthService } from './auth.service';

// DTo
import { LoginUserDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  /**
   * Constructor
   * @param authService
   */
  constructor(private readonly authService: AuthService) {}

  /**
   * User login method
   * @param loginDetails
   * @param res
   * @returns
   */
  @Post('login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiResponse({
    status: 200,
    description: 'User login successful.',
  })
  async login(@Body() loginDetails: LoginUserDto, @Res() res: Response) {
    try {
      // TODO check if user exist
      // TODO check if user is already logged in
      // TODO compare password
      // TODOD create access token & refresh token
      // TODO return response
      return res.status(HttpStatus.OK).json({
        message: 'User login successful',
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Logout user
   * @param res
   * @returns
   */
  @Post('logout')
  @ApiOperation({ summary: 'Logout a user' })
  @ApiResponse({
    status: 200,
    description: 'User logout successful.',
  })
  async logout(@Res() res: Response) {
    try {
      // TODO check refresh token
      // TODO delete refresh token
      // TODO return response
      return res.status(HttpStatus.OK).json({
        message: 'User logged out',
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
