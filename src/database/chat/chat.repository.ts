import { InjectModel } from 'nestjs-objection/dist';
import { Chat } from './chat.model';
import { ModelClass } from 'objection';
import { IChat, ICreateChat } from './chat.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatRepository {
  constructor(
    @InjectModel(Chat) private readonly chatRepository: ModelClass<Chat>,
  ) {}

  async createChat(createChat: ICreateChat): Promise<IChat> {
    return this.chatRepository.query().insert(createChat);
  }

  async getChats(): Promise<IChat[]> {
    return this.chatRepository.query();
  }

  async getChatById(id: number): Promise<IChat> {
    return this.chatRepository.query().findById(id);
  }

  async getChatListByUserId(userId: number): Promise<IChat[]> {
    return this.chatRepository
      .query()
      .joinRelated('user')
      .where('user.id', userId)
      .select('chat.*');
  }
}
