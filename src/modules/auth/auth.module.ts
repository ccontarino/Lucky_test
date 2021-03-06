import { Module } from '@nestjs/common';
import { ClassProvider } from '@nestjs/common/interfaces';

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AUTH_SERVICE } from './constants';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';

const authServiceProvider: ClassProvider = {
  provide: AUTH_SERVICE,
  useClass: AuthService,
};

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, authServiceProvider],
  exports: [AuthService, authServiceProvider],
})
export class AuthModule { }
