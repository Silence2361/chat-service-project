export interface IUser {
  id: number;
  user_name: string;
  created_at: Date;
}

export interface ICreateUser {
  user_name: string;
}

export interface ICreateUserResponse {
  id: number;
  user_name: string;
  created_at: Date;
}

export interface IGetUsersResponse {
  id: number;
  user_name: string;
  created_at: Date;
}

export interface IGetUserById {
  id: number;
}

export interface IGetUserByIdResponse {
  id: number;
  user_name: string;
  created_at: Date;
}
