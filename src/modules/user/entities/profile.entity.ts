import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Address } from './address.entity';

@Entity()
export class Profile {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  public Id: number;

  @ManyToOne(type => User, user => user.Id)
  public user: number

  @ManyToOne(type => Address, address => address.Id)
  public address: Address
}
