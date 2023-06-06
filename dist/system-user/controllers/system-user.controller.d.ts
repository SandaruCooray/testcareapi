import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { SystemUsersService } from '../services/system-user.service';
import { CreateSystemUserDto } from '../dto/create-system-user.dto';
import { UpdateSystemUserDto } from '../dto/update-system-user.dto';
export declare class UserController {
    private readonly systemUsersService;
    constructor(systemUsersService: SystemUsersService);
    create(createUserDto: CreateSystemUserDto): Promise<CommonResponseHandler>;
    findAll(): Promise<CommonResponseHandler>;
    update(id: string, updateSystemUserDto: UpdateSystemUserDto): Promise<CommonResponseHandler>;
}
