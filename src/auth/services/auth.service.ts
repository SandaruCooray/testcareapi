import { Injectable } from '@nestjs/common';
import { SystemUsersService } from '../../system-user/services/system-user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private systemUsersService: SystemUsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.systemUsersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log('user22', user);
    const payload = {
      username: user.username,
      sub: user.id,
      roles: [user.level],
    };
    return {
      access_token: this.jwtService.sign(payload),
      username: payload.username,
      level: payload.roles[0],
    };
  }
}
