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
import { NationalityService } from '../services/nationality.service';
import { CreateNationalityDto } from '../dto/create-nationality.dto';
import { UpdateNationalityDto } from '../dto/update-nationality.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gurds/roles.guard';
import { Role } from 'src/auth/role-enum/role.enum';

@Controller('nationality')
export class NationalityController {
  constructor(private readonly nationalityService: NationalityService) {}

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createNationalityDto: CreateNationalityDto) {
    return this.nationalityService.create(createNationalityDto);
  }

  // @HasRoles(Role.LEVEL_TEN)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async findAll(): Promise<CommonResponseHandler> {
    const data = await this.nationalityService.findAll();
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Nationality retrive Success`,
      data,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.nationalityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNationalityDto: UpdateNationalityDto,
  ) {
    return this.nationalityService.update(+id, updateNationalityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nationalityService.remove(+id);
  }
}
