import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.user({ email });

    if (!user) {
      throw new Error('User not found');
    }

    if (user.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.name, user };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
