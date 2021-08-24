import { Exclude, Expose } from 'class-transformer';
import { CountryDTO } from './country.dto';

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
