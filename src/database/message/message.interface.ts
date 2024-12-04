export interface IMessage {
  id: number;
  chat_id: number;
  author_id: number;
  text: string;
  created_at: Date;
}

export interface ICreateMessage {
  chat_id: number;
  author_id: number;
  text: string;
}

export interface ICreateMessageResponse {
  id: number;
  chat_id: number;
  author_id: number;
  text: string;
  created_at: Date;
}

export interface IGetMessageByChatId {
  chat_id: number;
}

export interface IGetMessageByChatIdResponse {
  id: number;
  chat_id: number;
  author_id: number;
  text: string;
  created_at: Date;
}
