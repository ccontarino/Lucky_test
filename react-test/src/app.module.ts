import { Module } from '@nestjs/common';

import { UserModule } from './User/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './User/user.controller';
// import { databaseProviders } from './database/database.providers';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { User } from './database/model/user.model'
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'AppIndex',
      autoLoadModels: true,
      synchronize: true,
      models: [],
    }),
  ],
  controllers: [UserController],
  providers: [UserModule],
})
export class AppModule { }
