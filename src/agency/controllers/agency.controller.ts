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

import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { AgencyService } from '../services/agency.service';
import { CreateAgencyDto } from '../dto/create-agency.dto';
import { UpdateAgencyDto } from '../dto/update-agency.dto';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gurds/roles.guard';
import { Role } from 'src/auth/role-enum/role.enum';

@Controller('agency')
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async create(
    @Body() createAgencyDto: CreateAgencyDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.agencyService.create(createAgencyDto);

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Agency Creation Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async findAll(): Promise<CommonResponseHandler> {
    const data = await this.agencyService.findAll();
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Agency retrive Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agencyService.findOne(+id);
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgencyDto: UpdateAgencyDto) {
    return this.agencyService.update(+id, updateAgencyDto);
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agencyService.remove(+id);
  }
}
