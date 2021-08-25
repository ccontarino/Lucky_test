import { Exclude, Expose } from 'class-transformer';

export class ProfileDto {

  @Expose()
  public id: string;

  @Expose()
  public userid: string;

  @Expose()
  public address: string;

  @Expose()
  public cityId: string;

  @Exclude()
  public password: string;


}
