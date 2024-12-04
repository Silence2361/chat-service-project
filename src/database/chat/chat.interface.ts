export interface IChat {
  id: number;
  name: string;
  created_at: Date;
}

export interface ICreateChatRepositoryData {
  name: string;
}

export interface ICreateChat {
  name: string;
  user_ids: number[];
}

export interface ICreateChatResponse {
  id: number;
}

export interface IGetChatsResponse {
  id: number;
  name: string;
  created_at: Date;
}

export interface IGetChatById {
  id: number;
}

export interface IGetChatByUserId {
  user_id: number;
}

export interface IGetChatByIdResponse {
  id: number;
  name: string;
  created_at: Date;
}

export interface IGetChatByUserIdResponse {
  id: number;
  name: string;
  created_at: Date;
}
