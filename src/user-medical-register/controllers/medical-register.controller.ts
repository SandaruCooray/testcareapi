import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpStatus,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MedicalRegisterService } from '../services/medical-register.service';
import { UpdateMedicalRegisterDto } from '../dto/update-medical-register.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { CreateMedicalRegisterBasicDto } from '../dto/create-medical-register-basic.dto';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gurds/roles.guard';
import { Role } from 'src/auth/role-enum/role.enum';

@Controller('medical-register')
export class MedicalRegistersController {
  constructor(
    private readonly medicalRegisterService: MedicalRegisterService,
  ) {}

  @HasRoles(Role.LEVEL_FOUR, Role.LEVEL_NINE, Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async create(
    @Body() createMedicalRegisterBasicDto: CreateMedicalRegisterBasicDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.medicalRegisterService.create(
      createMedicalRegisterBasicDto,
    );

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Mediacal Registration Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('date/:currentDate')
  async findAllByDate(
    @Param('currentDate') currentDate: Date,
  ): Promise<CommonResponseHandler> {
    const data = await this.medicalRegisterService.findByDate(currentDate);

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Retrive All Mediacal Registration Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('unique-id')
  async findOneByUniqueID(@Query() query: any) {
    const data = await this.medicalRegisterService.findOneByUniqueID(query);

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Retrive Mediacal Registrations Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async findAll(): Promise<CommonResponseHandler> {
    const data = await this.medicalRegisterService.findAll();

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Retrive Mediacal Registrations Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('generate')
  async generateSerialNo(): Promise<CommonResponseHandler> {
    const data = await this.medicalRegisterService.generateSerialNo();

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Generate RefNo Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<CommonResponseHandler> {
    console.log('id', id);
    const data = await this.medicalRegisterService.findOneById(+id);

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Retrive Mediacal Registration Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMedicalRegisterDtoDto: UpdateMedicalRegisterDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.medicalRegisterService.updateRegMedical(
      +id,
      updateMedicalRegisterDtoDto,
    );
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      ` Medical Registration Update Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('pagination')
  async pagination(
    @Query('take') take: number,
    @Query('skip') skip: number,
  ): Promise<CommonResponseHandler> {
    const data = await this.medicalRegisterService.pagination(take, skip);
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      ` Medical Registration Retrive Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_SIX, Role.LEVEL_NINE, Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch('/register-status/:id')
  async statusChange(
    @Param('id') id: string,
    @Query('status') status: boolean,
  ): Promise<CommonResponseHandler> {
    const data = await this.medicalRegisterService.statusChange(id, status);
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      ` Medical Registration Approved Success`,
      data,
    );
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.medicalRegisterService.remove(+id);
  // }
}
