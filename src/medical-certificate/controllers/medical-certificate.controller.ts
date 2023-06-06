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
import { MedicalCertificateService } from '../services/medical-certificate.service';
import { CreateMedicalCertificateDto } from '../dto/create-medical-certificate.dto';
import { UpdateMedicalCertificateDto } from '../dto/update-medical-certificate.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gurds/roles.guard';
import { Role } from 'src/auth/role-enum/role.enum';

@Controller('medical-certificate')
export class MedicalCertificateController {
  constructor(
    private readonly medicalCertificateService: MedicalCertificateService,
  ) {}

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async create(
    @Body() createMedicalCertificateDto: CreateMedicalCertificateDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.medicalCertificateService.create(
      createMedicalCertificateDto,
    );

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Medical Certificate Create Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async findAll(): Promise<CommonResponseHandler> {
    const data = await this.medicalCertificateService.findAll();

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Medical Certificate retriev Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CommonResponseHandler> {
    const data = await this.medicalCertificateService.findOne(+id);
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Medical Certificate Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMedicalCertificateDto: UpdateMedicalCertificateDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.medicalCertificateService.update(
      +id,
      updateMedicalCertificateDto,
    );
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Medical Certificate Update Success`,
      data,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalCertificateService.remove(+id);
  }
}
