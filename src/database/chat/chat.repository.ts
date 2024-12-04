import { InjectModel } from 'nestjs-objection';
import { Chat } from './chat.model';
import { ModelClass } from 'objection';
import { IChat, ICreateChatRepositoryData } from './chat.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatRepository {
  constructor(
    @InjectModel(Chat) private readonly chatModel: ModelClass<Chat>,
  ) {}

  async createChat(createChat: ICreateChatRepositoryData): Promise<IChat> {
    return this.chatModel.query().insert(createChat);
  }

  async getChats(): Promise<IChat[]> {
    return this.chatModel.query();
  }

  async getChatById(id: number): Promise<IChat | undefined> {
    return this.chatModel.query().findById(id);
  }

  async getChatListByUserId(user_id: number): Promise<IChat[]> {
    return this.chatModel
      .query()
      .joinRelated('users')
      .leftJoinRelated('messages')
      .where('users.id', user_id)
      .groupBy('chats.id')
      .orderByRaw('MAX(messages.created_at) DESC NULLS LAST')
      .select('chats.*');
  }

  async relateUsersToChat(chat_id: number, userIds: number[]): Promise<void> {
    for (const user_id of userIds) {
      await this.chatModel.relatedQuery('users').for(chat_id).relate(user_id);
    }
  }

  async getChatByName(name: string): Promise<IChat> {
    return this.chatModel.query().findOne({ name });
  }

  async isUserInChat(chat_id: number, user_id: number): Promise<boolean> {
    const result = await this.chatModel
      .query()
      .joinRelated('users')
      .where('chats.id', chat_id)
      .andWhere('users.id', user_id)
      .first();

    return !!result;
  }
}
