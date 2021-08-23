
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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

//   @ApiProperty({ enum: RoleEnum, default: [], isArray: true })
//   roles: RoleEnum[] = [];

//   @ApiProperty({ required: false, default: true })
//   isEnabled?: boolean = true;
// }