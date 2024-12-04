import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IChat } from 'src/database/chat/chat.interface';
import { ChatRepository } from 'src/database/chat/chat.repository';
import {
  ICreateMessage,
  ICreateMessageResponse,
  IGetMessageByChatId,
  IGetMessageByChatIdResponse,
  IMessage,
} from 'src/database/message/message.interface';
import { MessageRepository } from 'src/database/message/message.repository';
import { UserRepository } from 'src/database/user/user.repository';

@Injectable()
export class MessageService {
  constructor(
    private readonly messageRepository: MessageRepository,
    private readonly userRepository: UserRepository,
    private readonly chatRepository: ChatRepository,
  ) {}

  async addMessage(params: ICreateMessage): Promise<ICreateMessageResponse> {
    const { chat_id, author_id } = params;

    const chat: IChat = await this.chatRepository.getChatById(chat_id);
    if (!chat) {
      throw new NotFoundException(`Chat with ID ${chat_id} not found `);
    }

    const isUserInChat = await this.chatRepository.isUserInChat(
      chat_id,
      author_id,
    );
    if (!isUserInChat) {
      throw new ForbiddenException(
        `User with ID ${author_id} is not a member of chat with ID ${chat_id}`,
      );
    }

    const message: IMessage =
      await this.messageRepository.createMessage(params);
    return {
      id: message.id,
    };
  }

  async getMessageByChatId(
    param: IGetMessageByChatId,
  ): Promise<IGetMessageByChatIdResponse[]> {
    const { chat_id } = param;

    console.log(chat_id);

    const chat: IChat = await this.chatRepository.getChatById(chat_id);
    if (!chat) {
      throw new NotFoundException(`Chat with ID ${chat_id} not found`);
    }

    return this.messageRepository.getMessageByChatId(chat_id);
  }
}
