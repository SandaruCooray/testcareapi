import { PositionService } from '../services/position.service';
export declare class PositionController {
    private readonly positionService;
    constructor(positionService: PositionService);
    findAll(): Promise<import("../entities/position.entity").PositionEntity[]>;
}
