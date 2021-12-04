import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  @Get()
  async googleLogIn(user: any) {
    if (!user) {
      return 'No User from google';
    }
    return {
      message: 'User Info from google',
      user: user,
    };
  }
}
