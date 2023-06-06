import { SystemUsersService } from '../../system-user/services/system-user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private systemUsersService;
    private jwtService;
    constructor(systemUsersService: SystemUsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        username: any;
        level: any;
    }>;
}
