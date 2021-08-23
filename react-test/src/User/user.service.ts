import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  createUser(createUserdto: CreateUserDTO): CreateUserDTO {
    return createUserdto;
  }
}
