import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageResponseDto {
  @ApiProperty({ example: 1, description: 'Unique ID of the message' })
  id: number;
}
