import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { CountryService } from '../services/country.service';
import { CreateCountryDto } from '../dto/create-country.dto';
import { UpdateCountryDto } from '../dto/update-country.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { RolesGuard } from 'src/auth/gurds/roles.guard';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role-enum/role.enum';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @HasRoles(Role.LEVEL_FOUR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async create(
    @Body() createCountryDto: CreateCountryDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.countryService.create(createCountryDto);

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Country Creation Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_FOUR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async findAll(): Promise<CommonResponseHandler> {
    const data = await this.countryService.findAll();
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Country retrive Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_FOUR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CommonResponseHandler> {
    const data = await this.countryService.findOne(+id);
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Country retrive Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_FOUR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.countryService.update(+id, updateCountryDto);
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Country Update Success`,
      data,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
