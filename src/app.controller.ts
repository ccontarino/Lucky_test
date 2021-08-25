import { Post } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';

import { AuthService } from './modules/auth/auth.service';
import { LocalAuthGuard } from './modules/auth/local-auth-guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  public async login(@Request() req) {
    return this.authService.login(req.username);
  }
}
