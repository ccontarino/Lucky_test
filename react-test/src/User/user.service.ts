import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/database/model/user.model';
@Injectable()
export class UserService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) { }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  createUser(createUserdto: CreateUserDTO): CreateUserDTO {
    return createUserdto;
  }
}
