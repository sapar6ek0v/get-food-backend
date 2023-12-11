import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: userWhereUniqueInput });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    return await this.prisma.user.findMany({ ...params });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async updateUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return await this.prisma.user.update({
      where: userWhereUniqueInput,
      data,
    });
  }

  async deleteUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return await this.prisma.user.delete({
      where: userWhereUniqueInput,
    });
  }
}
