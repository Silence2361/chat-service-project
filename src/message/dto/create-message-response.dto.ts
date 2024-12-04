export class CreateMessageResponseDto {
  id: number;
  chat_id: number;
  author_id: number;
  text: string;
  created_at: Date;
}
