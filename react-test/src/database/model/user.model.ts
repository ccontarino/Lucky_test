
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  Id: number;

  @Column
  user_name: string;

  @Column
  password: string;
}