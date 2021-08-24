import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { Transaction } from 'typeorm';

import { AUTH_SERVICE, IAuthService } from '../auth';
import { USER_REPOSITORY } from './constants';
import { IUserRepository, IUserService } from './contracts';
import { RegisterUserDto, UserDto } from './dto';

@Injectable()
export class UserService implements IUserService {

  private userRepository: IUserRepository;
  private authService: IAuthService;

  constructor(@Inject(USER_REPOSITORY) userRepository: IUserRepository,
    @Inject(AUTH_SERVICE) authService: IAuthService) {
    this.userRepository = userRepository;
    this.authService = authService;
  }


  @Transaction()
  public async createUserEntities(user: RegisterUserDto) {
    try {
      const createdUser = await this.userRepository.createUser(user);
      const createdProfile = await this.userRepository.createUserProfile(createdUser);
      //return createdUser;
    } catch (error) {
      throw new ConflictException('user can not be save');
    }

  }

  public async signUp(user: RegisterUserDto): Promise<UserDto> {

    console.log("que pasa aca singup", user)
    if (await this.usernameIsTaken(user.username)) {
      throw new ConflictException('Username is already taken.');
    }

    const passwordHash = await this.authService.hashPassword(user.password);
    user.password = passwordHash;

    await this.createUserEntities(user);
    //  const createdUser = await this.userRepository.createUser(user);
    //  const createdProfile = await this.userRepository.createUserProfile(createdUser);

    //console.log(created user,createdUser);
    return createdProfile;
  }

  private async usernameIsTaken(username: string): Promise<boolean> {
    const user = await this.userRepository.findUserByUsername(username);

    if (user === undefined) {
      return false;
    }

    return true;
  }


}
