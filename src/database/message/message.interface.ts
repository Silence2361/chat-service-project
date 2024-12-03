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
  created_at: Date;
}
