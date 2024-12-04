import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { GetMessageByChatIdResponseDto } from './dto/get-message-by-chat-id-response.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { CreateMessageResponseDto } from './dto/create-message-response.dto';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('add')
  async sendMessage(
    @Body() createMessage: CreateMessageDto,
  ): Promise<CreateMessageResponseDto> {
    return this.messageService.addMessage(createMessage);
  }

  @Post('get-by-chat')
  async getMessageByChatId(
    @Body('chat_id') chat_id: number,
  ): Promise<GetMessageByChatIdResponseDto[]> {
    return this.messageService.getMessageByChatId({ chat_id });
  }
}
