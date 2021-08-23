import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  // @Get()
  // getHello(): string {
  //   return this.userService.getHello();
  // }
  @Post()
  async create(@Body(): CreateUserDTO): Promise<CreateUserDTO> {
    return this.userService.getHello();
  }
}
