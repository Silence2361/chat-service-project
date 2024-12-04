import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageResponseDto {
  @ApiProperty({ example: 1, description: 'Unique ID of the message' })
  id: number;

  @ApiProperty({
    example: 1,
    description: 'ID of the chat to which the message belongs',
  })
  chat_id: number;

  @ApiProperty({
    example: 1,
    description: 'ID of the user who authored the message',
  })
  author_id: number;

  @ApiProperty({
    example: 'Hello, world!',
    description: 'Content of the message',
  })
  text: string;

  @ApiProperty({
    example: '2024-12-04T15:00:00.000Z',
    description: 'Timestamp when the message was created',
  })
  created_at: Date;
}
