import { ApiProperty } from '@nestjs/swagger';

export class CreateChatResponseDto {
  @ApiProperty({ example: 1, description: 'Unique ID of the message' })
  @ApiProperty({ example: 1, description: 'Unique ID of the message' })
  id: number;
}
