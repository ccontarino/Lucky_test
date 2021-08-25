import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { City } from './city.entity';
@Entity()
export class Address {

  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  public Id: number;

  @ManyToOne((type) => City, (city) => city.Id) // note: we will create author property in the Photo class below
  public cityId: City;

  @Column()
  public street: string;

}
