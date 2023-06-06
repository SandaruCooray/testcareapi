import { CreateDeliveryDto } from '../dto/create-delivery.dto';
import { UpdateDeliveryDto } from '../dto/update-delivery.dto';
import { DeliveryEntity } from '../entities/delivery.entity';
import { Repository } from 'typeorm';
export declare class DeliveryService {
    private deliveryEntityRepository;
    constructor(deliveryEntityRepository: Repository<DeliveryEntity>);
    create(createDeliveryDto: CreateDeliveryDto): Promise<CreateDeliveryDto & DeliveryEntity>;
    findAll(): Promise<DeliveryEntity[]>;
    findOne(id: number): string;
    update(id: number, updateDeliveryDto: UpdateDeliveryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
