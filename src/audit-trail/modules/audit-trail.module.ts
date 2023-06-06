import { Module } from '@nestjs/common';
import { AuditTrailService } from '../services/audit-trail.service';
import { AuditTrailController } from '../controllers/audit-trail.controller';

@Module({
  controllers: [AuditTrailController],
  providers: [AuditTrailService],
})
export class AuditTrailModule {}
