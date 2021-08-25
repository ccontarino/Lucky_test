import { Expose } from 'class-transformer';

export class AddressDTO {

  @Expose()
  public id: string;

  @Expose()
  public street: string;

  @Expose()
  public cityId: number;

}
