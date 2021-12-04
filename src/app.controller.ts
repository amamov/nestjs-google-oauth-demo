import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return {
      message: 'Hello Google OAuth 2.0!',
      auth: 'http://localhost:5000/auth',
    };
  }
}
