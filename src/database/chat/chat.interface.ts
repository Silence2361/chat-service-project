export interface IChat {
  id: number;
  name: string;
  user_id: number;
  created_at: Date;
}

export interface ICreateChat {
  name: string;
  user_id: number;
}
