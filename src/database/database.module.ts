import { Module, Global } from '@nestjs/common';
import { ObjectionModule } from 'nestjs-objection';
import { UserRepository } from './user/user.repository';
import { ChatRepository } from './chat/chat.repository';
import { MessageRepository } from './message/message.repository';
import { Message } from './message/message.model';
import { Chat } from './chat/chat.model';
import { User } from './user/user.model';

@Global()
@Module({
  imports: [ObjectionModule.forFeature([User, Chat, Message])],
  providers: [UserRepository, ChatRepository, MessageRepository],
  exports: [UserRepository, ChatRepository, MessageRepository, ObjectionModule],
})
export class DatabaseModule {}
