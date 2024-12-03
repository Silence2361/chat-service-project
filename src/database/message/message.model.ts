import { Model, RelationMappings } from 'objection';
import { Chat } from '../chat/chat.model';
import { User } from '../user/user.model';

export class Message extends Model {
  static tableName: 'message';

  id: number;
  chat_id: number;
  author_id: number;
  text: string;
  created_at: Date;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['chat_id, author_id', 'text'],

      properties: {
        id: { type: 'integer' },
        chat_id: { type: 'integer' },
        author_id: { type: 'integer' },
        text: { type: 'string' },
        created_at: { type: 'string', format: 'date-time' },
      },
    };
  }

  static get relationMappings(): RelationMappings {
    return {
      chat: {
        relation: Model.BelongsToOneRelation,
        modelClass: Chat,
        join: {
          from: 'messages.chat_id',
          to: 'chats.id',
        },
      },
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'messages.author_id',
          to: 'users.id',
        },
      },
    };
  }
}
