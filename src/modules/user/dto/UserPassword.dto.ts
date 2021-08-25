import { Exclude, Expose } from 'class-transformer';

export class UserPasswordDto {


  @Expose()
  public username: string;

  @Expose()
  public password: string;

}
