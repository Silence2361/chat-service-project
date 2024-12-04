import { ApiProperty } from '@nestjs/swagger';

export class GetChatsResponseDto {
  @ApiProperty({ example: 1, description: 'Unique ID of the message' })
  id: number;

  @ApiProperty({ example: 'Chat Name', description: 'Unique name' })
  name: string;

  @ApiProperty({
    example: '2024-12-04T15:00:00.000Z',
    description: 'Timestamp when the message was created',
  })
  created_at: Date;
}
