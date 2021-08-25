import { UseGuards } from '@nestjs/common';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth-guard';
import { USER_SERVICE } from './constants';
import { IUserService } from './contracts';
import { RegisterUserDto, UserDto } from './dto';

@Controller('users')
export class UserController {

  private userServive: IUserService;

  constructor(@Inject(USER_SERVICE) userServive: IUserService) {
    this.userServive = userServive;

  }

  public async logIn(@Body() user: RegisterUserDto): Promise<string> {

    const createdUser = await this.userServive.logIn(user);
    return "lala"
  }


  @Post()
  public async signUp(@Body() user: RegisterUserDto): Promise<UserDto> {

    const createdUser = await this.userServive.signUp(user);
    return createdUser;
  }

}
