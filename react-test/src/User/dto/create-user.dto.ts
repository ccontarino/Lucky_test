import { ApiProperty } from '@nestjs/swagger';

interface Address {
  street: string,
  city: string,
  country: string
}

export class CreateUserDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  address: Address;

  //   @ApiProperty({ enum: RoleEnum, default: [], isArray: true })
  //   roles: RoleEnum[] = [];

  //   @ApiProperty({ required: false, default: true })
  //   isEnabled?: boolean = true;
}