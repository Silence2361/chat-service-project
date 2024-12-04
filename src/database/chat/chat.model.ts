import { Model, RelationMappings } from 'objection';
import { User } from '../user/user.model';
import { Message } from '../message/message.model';

export class Chat extends Model {
  static tableName = 'chats';

  id: number;
  name: string;
  created_at: Date;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
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
