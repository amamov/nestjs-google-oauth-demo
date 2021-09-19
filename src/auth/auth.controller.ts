import { AuthService } from './services/auth.service';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    return;
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogIn(req);
  }

  // 쿠키 남기기?? : GET "https://accounts.google.com/o/oauth2/revoke?token=" + ACCESS_TOKEN

  // logout : 쿠키 삭제 ??
}
