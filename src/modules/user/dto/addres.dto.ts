import { Expose } from 'class-transformer';

export class AddressDTO {

  @Expose()
  public id: string;

  @Expose()
  public street: string;

  // @Expose()
  // public country: CountryDTO;

  @Expose()
  public cityId: number;

}
