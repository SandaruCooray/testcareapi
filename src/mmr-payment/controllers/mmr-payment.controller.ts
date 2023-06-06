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
import { MmrPaymentService } from '../services/mmr-payment.service';
import { CreateMmrPaymentDto } from '../dto/create-mmr-payment.dto';
import { UpdateMmrPaymentDto } from '../dto/update-mmr-payment.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gurds/roles.guard';
import { Role } from 'src/auth/role-enum/role.enum';

@Controller('mmr-payment')
export class MmrPaymentController {
  constructor(private readonly mmrPaymentService: MmrPaymentService) {}

  @Post()
  create(@Body() createMmrPaymentDto: CreateMmrPaymentDto) {
    return this.mmrPaymentService.create(createMmrPaymentDto);
  }

  @Get()
  findAll() {
    return this.mmrPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mmrPaymentService.findOne(+id);
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMmrPaymentDto: UpdateMmrPaymentDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.mmrPaymentService.update(+id, updateMmrPaymentDto);
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `MMR Payment Update Success`,
      data,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mmrPaymentService.remove(+id);
  }
}
