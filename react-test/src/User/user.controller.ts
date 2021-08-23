import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() createUserDTO): Promise<CreateUserDTO> {
    return this.userService.createUser(createUserDTO);
  }

}
