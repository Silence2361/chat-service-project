import { ConflictException, Injectable } from '@nestjs/common';
import {
  ICreateUser,
  ICreateUserResponse,
  IGetUsersResponse,
  IUser,
} from '../database/user/user.interface';
import { UserRepository } from '../database/user/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(params: ICreateUser): Promise<ICreateUserResponse> {
    const { user_name } = params;

    const existingUser = await this.userRepository.getUserByName(user_name);
    if (existingUser) {
      throw new ConflictException(`User with name ${user_name} already exists`);
    }

    const user: IUser = await this.userRepository.addUser({ user_name });

    return {
      id: user.id,
    };
  }

  async getUsers(): Promise<IGetUsersResponse[]> {
    return this.userRepository.getUsers();
  }
}
