import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserDto {

  @Expose()
  public id: string;

  @Expose()
  public username: string;

  @Expose()
  public addres: string;

  @Expose()
  public cityId: string;


}
