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
import { LabRemarkService } from '../services/lab-remark.service';
import { CreateLabRemarkDto } from '../dto/create-lab-remark.dto';
import { UpdateLabRemarkDto } from '../dto/update-lab-remark.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gurds/roles.guard';
import { Role } from 'src/auth/role-enum/role.enum';

@Controller('lab-remark')
export class LabRemarkController {
  constructor(private readonly labRemarkService: LabRemarkService) {}

  @HasRoles(Role.LEVEL_SEVEN, Role.LEVEL_NINE, Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async create(
    @Param('id') id: string,
    @Body() createLabRemarkDto: CreateLabRemarkDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.labRemarkService.create(createLabRemarkDto);

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Lab Remark Success`,
      data,
    );
  }

  @Get()
  findAll() {
    return this.labRemarkService.findAll();
  }

  @HasRoles(Role.LEVEL_SEVEN, Role.LEVEL_NINE, Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLabRemarkDto: UpdateLabRemarkDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.labRemarkService.update(+id, updateLabRemarkDto);
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Lab Remark Update Success`,
      data,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.labRemarkService.remove(+id);
  }
}
