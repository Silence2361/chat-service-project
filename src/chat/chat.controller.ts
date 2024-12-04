import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { CreateChatResponseDto } from './dto/create-chat-reponse.dto';
import { ChatService } from './chat.service';
import { GetChatsResponseDto } from './dto/get-chats-response.dto';
import { GetChatByUserIdResponseDto } from './dto/get-chat-by-user-id-response.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('chats')
@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('add')
  @ApiOperation({ summary: 'Create a new chat' })
  @ApiResponse({
    status: 201,
    description: 'Chat successfully created.',
    type: CreateChatResponseDto,
  })
  async createChat(
    @Body() createChat: CreateChatDto,
  ): Promise<CreateChatResponseDto> {
    return this.chatService.createChat(createChat);
  }

  @Post('get')
  @ApiOperation({ summary: 'Get chats by user ID' })
  @ApiResponse({
    status: 200,
    description: 'Chats returned successfully.',
    type: [GetChatByUserIdResponseDto],
  })
  async getChatById(
    @Body('user_id') user_id: number,
  ): Promise<GetChatByUserIdResponseDto[]> {
    return this.chatService.getChatByUserId({ user_id });
  }

  @Get()
  @ApiOperation({ summary: 'Get chats' })
  @ApiResponse({
    status: 200,
    description: 'Chats returned successfully',
    type: [GetChatsResponseDto],
  })
  async getChats(): Promise<GetChatsResponseDto[]> {
    return this.chatService.getChats();
  }
}
