import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  public Id: number;

  @Column({
    unique: true,
    name: 'user_name',
  })
  public username: string;

  @Column()
  public password: string;

}
