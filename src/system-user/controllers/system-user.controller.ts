import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { SystemUsersService } from '../services/system-user.service';
import { CreateSystemUserDto } from '../dto/create-system-user.dto';
import { UpdateSystemUserDto } from '../dto/update-system-user.dto';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role-enum/role.enum';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gurds/roles.guard';

@Controller('user')
export class UserController {
  constructor(private readonly systemUsersService: SystemUsersService) {}

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async create(
    @Body() createUserDto: CreateSystemUserDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.systemUsersService.create(createUserDto);

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `User Creation Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async findAll(): Promise<CommonResponseHandler> {
    const data = await this.systemUsersService.findAll();
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `User retrive Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSystemUserDto: UpdateSystemUserDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.systemUsersService.update(+id, updateSystemUserDto);

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `User update Success`,
      data,
    );
  }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.usersService.remove(+id);
  //   }
}
