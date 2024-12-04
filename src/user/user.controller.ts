import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserResponseDto } from './dto/create-user-response.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'User successfully created.',
    type: CreateUserResponseDto,
  })
  async createUser(
    @Body() createUser: CreateUserDto,
  ): Promise<CreateUserResponseDto> {
    return this.userService.createUser(createUser);
  }

  @Get()
  @ApiOperation({ summary: 'Get users' })
  @ApiResponse({ status: 201, description: 'Users returned successfully.' })
  async getUsers() {
    return this.userService.getUsers();
  }
}
