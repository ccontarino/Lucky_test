import { IsNumber, IsString } from 'class-validator';

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
