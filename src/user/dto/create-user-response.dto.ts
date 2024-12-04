import { ApiProperty } from '@nestjs/swagger';

export class CreateUserResponseDto {
  @ApiProperty({ example: 1, description: 'Unique ID of the message' })
  id: number;
}
