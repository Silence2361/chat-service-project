import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { GetMessageByChatIdResponseDto } from './dto/get-message-by-chat-id-response.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { CreateMessageResponseDto } from './dto/create-message-response.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('messages')
@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('add')
  @ApiOperation({ summary: 'Send a message in a chat' })
  @ApiResponse({
    status: 201,
    description: 'Message successfully created.',
    type: CreateMessageResponseDto,
  })
  async sendMessage(
    @Body() createMessage: CreateMessageDto,
  ): Promise<CreateMessageResponseDto> {
    return this.messageService.addMessage(createMessage);
  }

  @Post('get-by-chat')
  @ApiOperation({ summary: 'Get messages by chat ID' })
  @ApiResponse({
    status: 200,
    description: 'Messages returned successfully.',
    type: [GetMessageByChatIdResponseDto],
  })
  async getMessageByChatId(
    @Body('chat_id') chat_id: number,
  ): Promise<GetMessageByChatIdResponseDto[]> {
    return this.messageService.getMessageByChatId({ chat_id });
  }
}
