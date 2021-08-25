import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {

  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  public Id: number;

  @Column()
  public countryId: string;

  @Column()
  public name: string;

}
