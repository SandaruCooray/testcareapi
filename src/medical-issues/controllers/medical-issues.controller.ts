import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { MedicalIssuesService } from '../services/medical-issues.service';
import { CreateMedicalIssueDto } from '../dto/create-medical-issue.dto';
import { UpdateMedicalIssueDto } from '../dto/update-medical-issue.dto';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { AuthUser } from 'src/auth/decorators/user.decorator';
import { RolesGuard } from 'src/auth/gurds/roles.guard';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role-enum/role.enum';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';

@Controller('medical-issues')
export class MedicalIssuesController {
  constructor(private readonly medicalIssuesService: MedicalIssuesService) {}

  @HasRoles(Role.LEVEL_FOUR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async create(
    @Body() createMedicalIssueDto: CreateMedicalIssueDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.medicalIssuesService.create(createMedicalIssueDto);
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Medical Issue Create Success`,
      data,
    );
  }

  @Get()
  findAll() {
    return this.medicalIssuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalIssuesService.findOne(+id);
  }

  @HasRoles(Role.LEVEL_FOUR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMedicalIssueDto: UpdateMedicalIssueDto,
    @AuthUser() user: any,
  ): Promise<CommonResponseHandler> {
    updateMedicalIssueDto.processedBy = user.username;
    const data = await this.medicalIssuesService.update(
      +id,
      updateMedicalIssueDto,
    );

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Medical Issue update Success`,
      data,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalIssuesService.remove(+id);
  }
}
