import { Injectable } from '@nestjs/common';

import bcrypt from 'bcrypt';

import { IAuthService } from './contracts';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }

  private readonly bcryptRounds: number = 12;

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  public async hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, this.bcryptRounds);

    return hashedPassword;
  }
  async login(user: any) {
    const payload = { username: user.username, password: user.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
