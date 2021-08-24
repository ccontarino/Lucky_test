import { Type } from 'class-transformer';
import { IsEmail, IsOptional, IsString, IsNumber, ValidateNested } from 'class-validator';
import { AddressDTO } from './addres.dto';

export class RegisterUserDto {

  @IsString()
  public username: string;

  @IsString()
  public password: string;
  @IsString()
  public address: string;

  @IsNumber()
  public cityId: number;

}
