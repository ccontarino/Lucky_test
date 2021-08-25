import { ValueProvider } from '@nestjs/common/interfaces';
import { Test } from '@nestjs/testing';

import { USER_SERVICE } from './constants';
import { IUserService } from './contracts';
import { RegisterUserDto, UserDto } from './dto';
import { UserController } from './user.controller';

describe('User Controller', () => {
  let userController: UserController;
  let userService: IUserService;

  beforeEach(async () => {
    userService = <IUserService>{};

    const userServiceProvider: ValueProvider = {
      provide: USER_SERVICE,
      useValue: userService,
    };

    const module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [userServiceProvider],
    }).compile();

    userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  it('should sign up the user', async () => {
    const userServiceSignUpReturnValue: UserDto = {
      id: 1,
      address: "calle falsa",
      password: 'secret',
      username: 'john.doe',
      cityId: "1"

    };
    userService.signUp = jest.fn().mockResolvedValue(userServiceSignUpReturnValue);

    const userToRegister: RegisterUserDto = {
      address: "calle falsa",
      password: 'secret',
      username: 'john.doe',
      cityId: 1
    };
    const registeredUser = await userController.signUp(userToRegister);

    expect(registeredUser).toEqual(userServiceSignUpReturnValue);
  });
});
