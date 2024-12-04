import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Model } from 'objection';
import Knex from 'knex';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { MessageService } from './message/message.service';
import { MessageController } from './message/message.controller';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    ChatModule,
    MessageModule,
  ],
  providers: [MessageService],
  controllers: [MessageController],
})
export class AppModule {
  constructor() {
    const knexConfig = {
      client: 'pg',
      connection: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      },
    };

    const knex = Knex(knexConfig);
    Model.knex(knex);
  }
}
