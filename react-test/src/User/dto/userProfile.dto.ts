
import { ApiProperty } from '@nestjs/swagger';

export class UserProfile {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  adress: string;


  @ApiProperty()
  cityId: number;

}