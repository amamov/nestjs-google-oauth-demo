import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return {
      message: 'Hello World!',
      auth: 'http://localhost:5000/auth',
    };
  }
}
