import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-objection';
import { User } from './user.model';
import { ModelClass } from 'objection';
import { ICreateUser, IUser } from './user.interface';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User) private readonly userModel: ModelClass<User>,
  ) {}

  async addUser(createUser: ICreateUser): Promise<IUser> {
    return this.userModel.query().insert(createUser);
  }

  async getUsers(): Promise<IUser[]> {
    return this.userModel.query();
  }

  async getUserByIds(userIds: number[]): Promise<IUser[]> {
    return this.userModel.query().findByIds(userIds);
  }

  async getUserByName(user_name: string) {
    return this.userModel.query().findOne({ user_name });
  }
}
