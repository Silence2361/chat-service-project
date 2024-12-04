import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Name', description: 'Unique username' })
  @IsString()
  @IsNotEmpty()
  user_name: string;
}
