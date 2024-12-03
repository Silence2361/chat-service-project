import { Model, RelationMappings } from 'objection';
import { User } from '../user/user.model';
import { Message } from '../message/message.model';

export class Chat extends Model {
  static tableName: 'chat';

  id: number;
  name: string;
  user_id: number;
  created_at: Date;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name, user_id'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        user_id: { type: 'integer' },
        created_at: { type: 'string', format: 'date-time' },
      },
    };
  }

  static get relationMappings(): RelationMappings {
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'chats.id',
          through: {
            from: 'user_chats.chat_id',
            to: 'user_chats.user_id',
          },
          to: 'users.id',
        },
      },
      messages: {
        relation: Model.HasManyRelation,
        modelClass: Message,
        join: {
          from: 'chats.id',
          to: 'messages.chat_id',
        },
      },
    };
  }
}
