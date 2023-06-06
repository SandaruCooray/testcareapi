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
import { NormalPaymentService } from '../services/payment.service';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gurds/roles.guard';
import { Role } from 'src/auth/role-enum/role.enum';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly normalPaymentService: NormalPaymentService) {}

  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.normalPaymentService.create(createPaymentDto);
  }

  @Get()
  findAll() {
    return this.normalPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.normalPaymentService.findOne(+id);
  }

  @HasRoles(Role.LEVEL_FOUR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePaymentDto: UpdatePaymentDto,
  ): Promise<CommonResponseHandler> {
    const data = await this.normalPaymentService.update(+id, updatePaymentDto);
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Normal Payment Update Success`,
      data,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.normalPaymentService.remove(+id);
  }
}
