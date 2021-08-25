import { Injectable } from '@nestjs/common';

import bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { IAuthService } from './contracts';

@Injectable()
export class AuthService implements IAuthService {

  private readonly bcryptRounds: number = 12;
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) { }

  public async validateUser(username: string, pass: string): Promise<any> {
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
  public async login(user: any) {
    const payload = { username: user.username, password: user.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
