import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { HonorificService } from '../services/honorific.service';
import { CreateHonorificDto } from '../dto/create-honorific.dto';
import { UpdateHonorificDto } from '../dto/update-honorific.dto';

@Controller('honorific')
export class HonorificController {
  constructor(private readonly honorificService: HonorificService) {}

  @Post()
  async create(
    @Param('id') id: string,
    @Body() createHonorificDto: CreateHonorificDto,
  ) {}

  @Get()
  async findAll(): Promise<CommonResponseHandler> {
    const data = await this.honorificService.findAll();

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `honorific retrieve Success`,
      data,
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateHonorificDto: UpdateHonorificDto,
  ) {}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.honorificService.remove(+id);
  }
}
