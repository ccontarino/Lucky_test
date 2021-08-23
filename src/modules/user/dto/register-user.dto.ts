import { IsEmail, IsOptional, IsString } from 'class-validator';

export class RegisterUserDto {

  @IsString()
  public username: string;

  @IsString()
  public password: string;


  @IsString()
  public address: string;

  @IsString()
  public cityId: string;

}
