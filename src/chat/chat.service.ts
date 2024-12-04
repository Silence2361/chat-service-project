import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  IChat,
  ICreateChat,
  ICreateChatResponse,
  IGetChatById,
  IGetChatByIdResponse,
  IGetChatsResponse,
} from 'src/database/chat/chat.interface';
import { ChatRepository } from 'src/database/chat/chat.repository';
import { UserRepository } from 'src/database/user/user.repository';

@Injectable()
export class ChatService {
  constructor(
    private readonly chatRepository: ChatRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async createChat(params: ICreateChat): Promise<ICreateChatResponse> {
    const { user_ids, name } = params;

    const existingChat = await this.chatRepository.getChatByName(name);
    if (existingChat) {
      throw new ConflictException(`Chat with name ${name} already exists`);
    }

    const existingUser = await this.userRepository.getUserByIds(user_ids);
    if (existingUser.length !== user_ids.length) {
      throw new NotFoundException('One or more users do not exist');
    }

    const chat: IChat = await this.chatRepository.createChat({ name });

    await this.chatRepository.relateUsersToChat(chat.id, user_ids);

    return chat;
  }

  async getChats(): Promise<IGetChatsResponse[]> {
    return this.chatRepository.getChats();
  }

  async getChatById(param: IGetChatById): Promise<IGetChatByIdResponse> {
    const { id } = param;

    const chat: IChat = await this.chatRepository.getChatById(id);
    if (!id) {
      throw new NotFoundException(`This ID ${id} not found`);
    }

    return chat;
  }

  async getChatByUser(user_id: number) {
    const user = await this.userRepository.getUserById(user_id);
    if (!user) {
      throw new NotFoundException(`User with ID ${user_id} not found`);
    }

    return this.chatRepository.getChatListByUserId(user_id);
  }
}
