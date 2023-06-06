import { DeliveryService } from '../services/delivery.service';
import { CreateDeliveryDto } from '../dto/create-delivery.dto';
import { UpdateDeliveryDto } from '../dto/update-delivery.dto';
export declare class DeliveryController {
    private readonly deliveryService;
    constructor(deliveryService: DeliveryService);
    create(createDeliveryDto: CreateDeliveryDto): Promise<CreateDeliveryDto & import("../entities/delivery.entity").DeliveryEntity>;
    findAll(): Promise<import("../entities/delivery.entity").DeliveryEntity[]>;
    findOne(id: string): string;
    update(id: string, updateDeliveryDto: UpdateDeliveryDto, user: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
