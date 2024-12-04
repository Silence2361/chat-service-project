import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty({ example: 1, description: 'ID of the chat' })
  @IsNumber()
  @IsNotEmpty()
  chat_id: number;

  @ApiProperty({ example: 1, description: 'ID of the author (user)' })
  @IsNumber()
  @IsNotEmpty()
  author_id: number;

  @ApiProperty({
    example: 'Hello, world!',
    description: 'Content of the message',
  })
  @IsString()
  @IsNotEmpty()
  text: string;
}
