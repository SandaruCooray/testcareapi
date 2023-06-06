import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PassportInquiryService } from '../services/passport-inquiry.service';
import { CreatePassportInquiryDto } from '../dto/create-passport-inquiry.dto';
import { UpdatePassportInquiryDto } from '../dto/update-passport-inquiry.dto';

@Controller('passport-inquiry')
export class PassportInquiryController {
  constructor(
    private readonly passportInquiryService: PassportInquiryService,
  ) {}

  @Post()
  create(@Body() createPassportInquiryDto: CreatePassportInquiryDto) {
    return this.passportInquiryService.create(createPassportInquiryDto);
  }

  @Get()
  findAll() {
    return this.passportInquiryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passportInquiryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePassportInquiryDto: UpdatePassportInquiryDto,
  ) {
    return this.passportInquiryService.update(+id, updatePassportInquiryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passportInquiryService.remove(+id);
  }
}
