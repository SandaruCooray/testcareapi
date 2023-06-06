import { AuditTrailService } from '../services/audit-trail.service';
import { CreateAuditTrailDto } from '../dto/create-audit-trail.dto';
import { UpdateAuditTrailDto } from '../dto/update-audit-trail.dto';
export declare class AuditTrailController {
    private readonly auditTrailService;
    constructor(auditTrailService: AuditTrailService);
    create(createAuditTrailDto: CreateAuditTrailDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuditTrailDto: UpdateAuditTrailDto): string;
    remove(id: string): string;
}
