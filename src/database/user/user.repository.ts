import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-objection';
import { User } from './user.model';
import { ModelClass } from 'objection';
import { ICreateUser, IUser } from './user.interface';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User) private readonly userRepository: ModelClass<User>,
  ) {}

  async addUser(createUser: ICreateUser): Promise<IUser> {
    return this.userRepository.query().insert(createUser);
  }

  async getUsers(): Promise<IUser[]> {
    return this.userRepository.query();
  }

  async getUserByIds(userIds: number[]): Promise<IUser[]> {
    return this.userRepository.query().findByIds(userIds);
  }
}
