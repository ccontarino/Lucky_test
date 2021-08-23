import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './User/user.module';
import { UserController } from './User/user.controller';
import { UserService } from './User/user.service';
import { DatabaseModule } from './database/database.module';
import { User } from './User/user.entity';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'AppIndex',
      entities: [User],
      synchronize: true,
    }), UserModule
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {
  constructor(private connection: Connection) { }

}
