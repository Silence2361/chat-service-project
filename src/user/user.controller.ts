import { Controller, Post, Body, Get, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserResponseDto } from './dto/create-user-response.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
    Logger.log('UserController initialized');
  }

  @Post('add')
  async createUser(
    @Body() createUser: CreateUserDto,
  ): Promise<CreateUserResponseDto> {
    Logger.log('createUser called with:', JSON.stringify(createUser));
    return this.userService.createUser(createUser);
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }
}
