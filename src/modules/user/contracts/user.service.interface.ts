import { RegisterUserDto, UserDto } from '../dto';
import { UserPasswordDto } from '../dto/UserPassword.dto';

export interface IUserService {
  signUp(user: RegisterUserDto): Promise<UserDto>;
  logIn(user: UserPasswordDto): Promise<string>;
}
