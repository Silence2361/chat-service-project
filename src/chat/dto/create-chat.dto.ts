import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateChatDto {
  @ApiProperty({ example: 'General Chat', description: 'Name of the chat' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: [1, 2], description: 'List of user IDs' })
  @IsArray()
  @IsNotEmpty({ each: true })
  user_ids: number[];
}
