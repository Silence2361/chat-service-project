export interface IUser {
  id: number;
  user_name: string;
  created_at: Date;
}

export interface ICreateUser {
  user_name: string;
}
