import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { CreateChatResponseDto } from './dto/create-chat-reponse.dto';
import { ChatService } from './chat.service';
import { GetChatByUserIdResponseDto } from './dto/get-chat-by-user-id.dto';
import { GetChatsResponseDto } from './dto/get-chats-response.dto';

@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async createChat(
    @Body() createChat: CreateChatDto,
  ): Promise<CreateChatResponseDto> {
    return this.chatService.createChat(createChat);
  }

  @Get()
  async getChats(): Promise<GetChatsResponseDto[]> {
    return this.chatService.getChats();
  }

  @Get(':id')
  async getChatById(
    @Param('id') id: number,
  ): Promise<GetChatByUserIdResponseDto[]> {
    return this.chatService.getChatByUser(id);
  }
}
