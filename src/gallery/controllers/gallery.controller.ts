import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  HttpStatus,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GalleryService } from '../services/gallery.service';
import { CreateGalleryDto } from '../dto/create-gallery.dto';
import { UpdateGalleryDto } from '../dto/update-gallery.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
import { diskStorage } from 'multer';
import { HasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gurds/roles.guard';
import { Role } from 'src/auth/role-enum/role.enum';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @HasRoles(Role.LEVEL_THREE, Role.LEVEL_NINE, Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  @UseInterceptors(
    FileInterceptor('imgPath', {
      storage: diskStorage({
        destination: 'public/',
        filename: (req, file, callback) => {
          const filename = `${file.originalname}`;
          callback(null, filename);
        },
      }),
      // dest: 'public/',
    }),
  )
  async create(
    @Body() createGalleryDto: CreateGalleryDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CommonResponseHandler> {
    createGalleryDto.imgPath = file?.path;
    createGalleryDto.regDate = new Date();
    const data = await this.galleryService.create(createGalleryDto);

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Image Upload Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async findAll(@Query() query: any): Promise<CommonResponseHandler> {
    const data = await this.galleryService.findAll(query);
    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Image Retrieve Success`,
      data,
    );
  }

  @HasRoles(Role.LEVEL_TEN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':passportNo')
  async findOne(@Param('passportNo') passportNo: string) {
    const data = await this.galleryService.findOne(passportNo);

    return new CommonResponseHandler(
      HttpStatus.OK,
      'Success',
      `Image Not Found`,
      data,
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGalleryDto: UpdateGalleryDto) {
    return this.galleryService.update(+id, updateGalleryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galleryService.remove(+id);
  }
}
