import { CreateGalleryDto } from '../dto/create-gallery.dto';
import { UpdateGalleryDto } from '../dto/update-gallery.dto';
import { GalleryEntity } from '../entities/gallery.entity';
import { Repository } from 'typeorm';
export declare class GalleryService {
    private galleryEntityRepository;
    constructor(galleryEntityRepository: Repository<GalleryEntity>);
    create(createGalleryDto: CreateGalleryDto): Promise<CreateGalleryDto & GalleryEntity>;
    findAll(query: any): Promise<GalleryEntity[]>;
    findOne(passportNo: string): Promise<GalleryEntity>;
    update(id: number, updateGalleryDto: UpdateGalleryDto): string;
    remove(id: number): string;
}
