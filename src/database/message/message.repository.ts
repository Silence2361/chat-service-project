import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-objection';
import { Message } from './message.model';
import { ModelClass } from 'objection';
import { ICreateMessage, IMessage } from './message.interface';

@Injectable()
export class MessageRepository {
  constructor(
    @InjectModel(Message)
    private readonly messageModel: ModelClass<Message>,
  ) {}

  async createMessage(createMessage: ICreateMessage): Promise<IMessage> {
    return this.messageModel.query().insert(createMessage);
  }

  async getMessageByChatId(chat_id: number): Promise<IMessage[]> {
    return this.messageModel
      .query()
      .where('chat_id', chat_id)
      .orderBy('created_at', 'asc');
  }
}
