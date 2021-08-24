import { Exclude, Expose } from 'class-transformer';

export class UserDto {

  @Expose()
  public id: string;

  @Expose()
  public username: string;

  @Expose()
  public address: string;

  @Expose()
  public cityId: string;

  @Exclude()
  public password: string;


}
