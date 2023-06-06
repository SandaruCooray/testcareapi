/// <reference types="multer" />
import { GalleryService } from '../services/gallery.service';
import { CreateGalleryDto } from '../dto/create-gallery.dto';
import { UpdateGalleryDto } from '../dto/update-gallery.dto';
import { CommonResponseHandler } from 'src/request-response-handlers/dtos/common-response.dto';
export declare class GalleryController {
    private readonly galleryService;
    constructor(galleryService: GalleryService);
    create(createGalleryDto: CreateGalleryDto, file: Express.Multer.File): Promise<CommonResponseHandler>;
    findAll(query: any): Promise<CommonResponseHandler>;
    findOne(passportNo: string): Promise<CommonResponseHandler>;
    update(id: string, updateGalleryDto: UpdateGalleryDto): string;
    remove(id: string): string;
}
