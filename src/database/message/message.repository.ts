import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-objection';
import { Message } from './message.model';
import { ModelClass } from 'objection';
import { ICreateMessage, IMessage } from './message.interface';

@Injectable()
export class MessageRepository {
  constructor(
    @InjectModel(Message)
    private readonly messageRepository: ModelClass<Message>,
  ) {}

  async createMessage(createMessage: ICreateMessage): Promise<IMessage> {
    return this.messageRepository.query().insert(createMessage);
  }

  async getMessageByChatId(chatId: number): Promise<IMessage[]> {
    return this.messageRepository
      .query()
      .where('chat_id', chatId)
      .orderBy('created_at', 'asc');
  }
}
