"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMedicalIssueDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_medical_issue_dto_1 = require("./create-medical-issue.dto");
class UpdateMedicalIssueDto extends (0, swagger_1.PartialType)(create_medical_issue_dto_1.CreateMedicalIssueDto) {
}
exports.UpdateMedicalIssueDto = UpdateMedicalIssueDto;
//# sourceMappingURL=update-medical-issue.dto.js.map