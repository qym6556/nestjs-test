import { Controller, Get } from '@nestjs/common';
@Controller('users')
export class UsersController {
  @Get()
  findAll(): string[] {
    return ['user1', 'user2'];
  }
}
