"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuditTrailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_audit_trail_dto_1 = require("./create-audit-trail.dto");
class UpdateAuditTrailDto extends (0, swagger_1.PartialType)(create_audit_trail_dto_1.CreateAuditTrailDto) {
}
exports.UpdateAuditTrailDto = UpdateAuditTrailDto;
//# sourceMappingURL=update-audit-trail.dto.js.map