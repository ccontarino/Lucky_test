import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { City } from './city.entity';
@Entity()
export class Address {

  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  public Id: number;

  @ManyToOne((type) => City, (city) => city.Id)
  public cityId: City;

  @Column()
  public street: string;

}
