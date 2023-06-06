import { Repository } from 'typeorm';
import { SystemUserEntity } from '../entities/system-user.entity';
import { CreateSystemUserDto } from '../dto/create-system-user.dto';
import { UpdateSystemUserDto } from '../dto/update-system-user.dto';
export declare class SystemUsersService {
    private userEntityRepository;
    constructor(userEntityRepository: Repository<SystemUserEntity>);
    create(createSystemUserDto: CreateSystemUserDto): Promise<SystemUserEntity>;
    findAll(): Promise<SystemUserEntity[]>;
    findOne(username: string): Promise<SystemUserEntity>;
    update(id: number, updateSystemUserDto: UpdateSystemUserDto): Promise<import("typeorm").UpdateResult>;
}
