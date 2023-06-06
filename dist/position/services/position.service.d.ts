import { PositionEntity } from '../entities/position.entity';
import { Repository } from 'typeorm';
export declare class PositionService {
    private positionEntityRepository;
    constructor(positionEntityRepository: Repository<PositionEntity>);
    findAll(): Promise<PositionEntity[]>;
}
