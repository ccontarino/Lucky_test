import { Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';
import { User } from './user.entity';

@Entity()
export class Profile {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  public Id: number;

  @ManyToOne((type) => User, (user) => user.Id)
  public user: number;

  @ManyToOne((type) => Address, (address) => address.Id)
  public address: Address;
}
