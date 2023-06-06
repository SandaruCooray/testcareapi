import { Module } from '@nestjs/common';
import { SystemUsersService } from '../services/system-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemUserEntity } from '../entities/system-user.entity';
import { UserController } from '../controllers/system-user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SystemUserEntity])],
  controllers: [UserController],
  providers: [SystemUsersService],
  exports: [SystemUsersService],
})
export class SystemUsersModule {}
