import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PositionService } from '../services/position.service';
import { CreatPositionDto } from '../dtos/create-position.dto';
import { UpdatePositionDto } from '../dtos/update-position.dto';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  //   @Post()
  //   create(@Body() creatPositionDto: CreatPositionDto) {
  //     return this.positionService.create(creatPositionDto);
  //   }

  @Get()
  findAll() {
    return this.positionService.findAll();
  }

  //   @Get(':id')
  //   findOne(@Param('id') id: string) {
  //     return this.positionService.findOne(+id);
  //   }

  //   @Patch(':id')
  //   update(
  //     @Param('id') id: string,
  //     @Body() updatePositionDto: UpdatePositionDto,
  //   ) {
  //     return this.positionService.update(+id, updatePositionDto);
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.positionService.remove(+id);
  //   }
}
