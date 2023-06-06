import { CreateAuditTrailDto } from '../dto/create-audit-trail.dto';
import { UpdateAuditTrailDto } from '../dto/update-audit-trail.dto';
export declare class AuditTrailService {
    create(createAuditTrailDto: CreateAuditTrailDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuditTrailDto: UpdateAuditTrailDto): string;
    remove(id: number): string;
}
