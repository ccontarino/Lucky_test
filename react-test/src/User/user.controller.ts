import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
  @Post()
  get(): string {
    return this.userService.getHello();
  }
}