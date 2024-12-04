import { Model, RelationMappings } from 'objection';
import { Chat } from '../chat/chat.model';
import { Message } from '../message/message.model';

export class User extends Model {
  static tableName = 'users';

  id: number;
  user_name: string;
  created_at: Date;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_name'],

      properties: {
        id: { type: 'integer' },
        user_name: { type: 'string' },
        created_at: { type: 'string', format: 'date-time' },
      },
    };
  }

  static get relationMappings(): RelationMappings {
    return {
      chats: {
        relation: Model.ManyToManyRelation,
        modelClass: Chat,
        join: {
          from: 'users.id',
          through: {
            from: 'user_chats.user_id',
            to: 'user_chats.chat_id',
          },
          to: 'chats.id',
        },
      },
      messages: {
        relation: Model.HasManyRelation,
        modelClass: Message,
        join: {
          from: 'users.id',
          to: 'messages.author_id',
        },
      },
    };
  }
}
