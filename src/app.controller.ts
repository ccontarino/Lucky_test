import { Post } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { AuthService } from './modules/auth/auth.service';
import { LocalAuthGuard } from './modules/auth/local-auth-guard';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) { }
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.username);
  }
}
