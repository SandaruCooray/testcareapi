import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { DoctorService } from '../services/doctor.service';
import { CreateDoctorRequest } from '../dto/doctor-create.dto';
import { UpdateDoctorDto } from '../dto/doctor-update.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role-enum/role.enum';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gurds/roles.guard';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @HasRoles(Role.LEVEL_NINE, Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async create(
    @Body() createDoctorRequest: CreateDoctorRequest,
  ): Promise<CommonResponseHandler> {
    const data = await this.doctorService.create(createDoctorRequest);

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Doctor Creation Success`,
      data,
    );
  }

  // @HasRoles(Role.LEVEL_TEN)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  findAll() {
    return this.doctorService.findAll();
  }

  // @HasRoles(Role.LEVEL_TEN)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.doctorService.findOneById(+id);
  }

  @HasRoles(Role.LEVEL_NINE, Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.doctorService.update(+id, updateDoctorDto);
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Doctor Update Success`,
      data,
    );
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.medicalRegisterService.remove(+id);
  // }
}
