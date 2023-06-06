import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { DeliveryService } from '../services/delivery.service';
import { CreateDeliveryDto } from '../dto/create-delivery.dto';
import { UpdateDeliveryDto } from '../dto/update-delivery.dto';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { AuthUser } from 'src/auth/decorators/user.decorator';
import { RolesGuard } from 'src/auth/gurds/roles.guard';
import { Role } from 'src/auth/role-enum/role.enum';
import { HasRoles } from 'src/auth/decorators/roles.decorator';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post()
  create(@Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliveryService.create(createDeliveryDto);
  }

  @Get()
  findAll() {
    return this.deliveryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryService.findOne(+id);
  }

  @HasRoles(Role.LEVEL_FOUR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeliveryDto: UpdateDeliveryDto,
    @AuthUser() user: any,
  ) {
    updateDeliveryDto.processedBy = user.username;
    return this.deliveryService.update(+id, updateDeliveryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryService.remove(+id);
  }
}
