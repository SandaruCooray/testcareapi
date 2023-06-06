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
import { ResultEntriesService } from '../services/result-entries.service';
import { UpdateResultEntryDto } from '../dto/update-result-entry.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { CreateResultEntryDto } from '../dto/create-result-entry.dto';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gurds/roles.guard';
import { Role } from 'src/auth/role-enum/role.enum';

@Controller('result-entries')
export class ResultEntriesController {
  constructor(private readonly resultEntriesService: ResultEntriesService) {}

  @HasRoles(Role.LEVEL_EIGHT, Role.LEVEL_NINE, Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async create(
    @Body() createResultEntryDto: CreateResultEntryDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.resultEntriesService.create(createResultEntryDto);

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Result Entry Success`,
      data,
    );
  }

  @Get()
  findAll() {
    return this.resultEntriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resultEntriesService.findOne(+id);
  }

  @HasRoles(Role.LEVEL_EIGHT, Role.LEVEL_NINE, Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateResultEntryDto: UpdateResultEntryDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.resultEntriesService.update(
      +id,
      updateResultEntryDto,
    );
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Result Entry Update Success`,
      data,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resultEntriesService.remove(+id);
  }
}
