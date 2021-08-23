import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  // @Get()
  // getHello(): string {
  //   return this.userService.getHello();
  // }
  @Post()
  async create(@Body(): createUserDTO): CreateUserDTO {
    return this.userService.getHello();
  }
}
