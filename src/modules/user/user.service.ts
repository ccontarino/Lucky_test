import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { getConnection, Transaction } from 'typeorm';
import { AUTH_SERVICE, IAuthService } from '../auth';
import { USER_REPOSITORY } from './constants';
import { IUserRepository, IUserService } from './contracts';
import { RegisterUserDto, UserDto } from './dto';
import { UserPasswordDto } from './dto/UserPassword.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class UserService implements IUserService {

  private userRepository: IUserRepository;
  private authService: IAuthService;

  constructor(@Inject(USER_REPOSITORY) userRepository: IUserRepository,
              @Inject(AUTH_SERVICE) authService: IAuthService) {
    this.userRepository = userRepository;
    this.authService = authService;
  }

  public findOne(username: string): Promise<UserDto | undefined> {

    return this.userRepository.findUserByUsername(username);

  }

  // @Transaction()
  // public async createUserEntities(user: RegisterUserDto) {
  //   try {
  //     const createdUser = await this.userRepository.createUser(user);
  //     const response = await getConnection()
  //       .createQueryBuilder()
  //       .insert()
  //       .into(Profile)
  //       .values([
  //         { user: createdUser.id, address: { street: user.address } },
  //       ])
  //       .execute();

  //     return createdUser;
  //   } catch (error) {
  //     throw new ConflictException('user can not be save');
  //   }
  // }

  @Transaction()
  public async signUp(user: RegisterUserDto): Promise<UserDto> {

    if (await this.usernameExist(user.username)) {
      throw new ConflictException('Username is already taken.');
    }

    const passwordHash = await this.authService.hashPassword(user.password);
    user.password = passwordHash;

    let createdUser;
    try {
      createdUser = await this.userRepository.createUser(user);
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Profile)
        .values([
          { user: createdUser.id, address: { street: user.address } },
        ])
        .execute();
      return createdUser;
    } catch (error) {
      throw new ConflictException('user can not be save');
    }

  }

  @Transaction()
  public async logIn(user: UserPasswordDto): Promise<string> {

    try {
      const userDatabase: UserDto = await this.userNameExist(user.username);
      const passwordHash = await this.authService.hashPassword(user.password);
      user.password = passwordHash;
      if (user.password !== userDatabase.password) {
        throw new ConflictException('incorrect username/password');
      }
    } catch (error) {
      throw new ConflictException(error);
    }

    return 'token';

  }

  private async usernameExist(username: string): Promise<boolean> {
    const user = await this.userRepository.findUserByUsername(username);

    if (user === undefined) {
      return false;
    }

    return true;
  }

  private async userNameExist(username: string): Promise<UserDto> {
    const user = await this.userRepository.findUserByUsername(username);

    if (user === undefined) {
      throw new ConflictException('user dosen\'t exist');
    }

    return user;
  }

}
