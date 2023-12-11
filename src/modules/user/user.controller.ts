import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    return await this.userService.users({});
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.userService.user({ id });
  }

  @Post()
  async create(@Body() data: Prisma.UserCreateInput) {
    return await this.userService.createUser(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Prisma.UserUpdateInput) {
    return await this.userService.updateUser({ id }, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.userService.deleteUser({ id });
  }
}
