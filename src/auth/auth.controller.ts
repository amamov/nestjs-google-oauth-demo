import { AuthService } from './services/auth.service';
import { Controller, Get, Logger, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private logger = new Logger(AuthController.name);

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    return;
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const user = req.user;
    this.authService.googleLogIn(user);
    return res.redirect('/auth/results');
  }

  @Get('results')
  authResult(@Req() req: Express.Request) {
    const user = req.user;
    return this.authService.googleLogIn(user);
  }

  // 쿠키 남기기?? : GET "https://accounts.google.com/o/oauth2/revoke?token=" + ACCESS_TOKEN

  // logout : 쿠키 삭제 ??
}
