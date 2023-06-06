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
import { DoctorRemarkService } from '../services/doctor-remark.service';
import { CreateDoctorRemarkDto } from '../dto/create-doctor-remark.dto';
import { UpdateDoctorRemarkDto } from '../dto/update-doctor-remark.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gurds/roles.guard';
import { Role } from 'src/auth/role-enum/role.enum';

@Controller('doctor-remark')
export class DoctorRemarkController {
  constructor(private readonly doctorRemarkService: DoctorRemarkService) {}

  @HasRoles(Role.LEVEL_FOUR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async create(
    @Param('id') id: string,
    @Body() createDoctorRemarkDto: CreateDoctorRemarkDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.doctorRemarkService.create(createDoctorRemarkDto);

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Doctor Remark Success`,
      data,
    );
  }

  @Get()
  findAll() {
    return this.doctorRemarkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorRemarkService.findOne(+id);
  }

  @HasRoles(Role.LEVEL_FOUR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDoctorRemarkDto: UpdateDoctorRemarkDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.doctorRemarkService.update(
      +id,
      updateDoctorRemarkDto,
    );
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Doctor Remark Update Success`,
      data,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorRemarkService.remove(+id);
  }
}
