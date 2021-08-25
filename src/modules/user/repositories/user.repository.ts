import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { plainToClass } from 'class-transformer';
import { getConnection, Repository, Transaction } from 'typeorm';

import { IUserRepository } from '../contracts';
import { RegisterUserDto, UserDto, ProfileDto } from '../dto';
import { Profile, User } from '../entities';

@Injectable()
export class UserRepository implements IUserRepository {

  private userRepository: Repository<User>;

  constructor(@InjectRepository(User) userRepository: Repository<User>) {
    this.userRepository = userRepository;
  }

  public async findUserByUsername(username: string): Promise<UserDto | undefined> {
    const userEntity = await this.userRepository.findOne({ username: username });
    const user = plainToClass(UserDto, userEntity);

    return user;
  }

  public async createUser(user: RegisterUserDto): Promise<UserDto> {
    const userEntity = this.userRepository.create(user);
    const response = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Profile)
      .values([
        { user: user.id, address: { street: user.address } },
      ])
      .execute();

    try {
      const createdUserEntity = await this.userRepository.save(userEntity);
      const createdUser = plainToClass(UserDto, createdUserEntity);
      return createdUser;
    } catch (error) {
      throw new ConflictException('user can not be save');
    }
    // console.log("createdUserEntity", createdUserEntity);



  }


  // public async createUserProfile(userProfile: RegisterUserDto): Promise<ProfileDto> {
  //   const userEntity = this.userRepository.create(userProfile);
  //   const createdUserProfileEntity = await this.userRepository.save(userEntity);
  //   console.log("created user profile", createdUserProfileEntity);
  //   const createdUserProfile = plainToClass(ProfileDto, createdUserProfileEntity);

  //   return createdUserProfile;
  // }
}
