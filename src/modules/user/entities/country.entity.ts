import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {

  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  public Id: number;

  @Column()
  public name: string;

}
