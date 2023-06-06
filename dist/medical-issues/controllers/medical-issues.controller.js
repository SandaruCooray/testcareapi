"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalIssuesController = void 0;
const common_1 = require("@nestjs/common");
const medical_issues_service_1 = require("../services/medical-issues.service");
const create_medical_issue_dto_1 = require("../dto/create-medical-issue.dto");
const update_medical_issue_dto_1 = require("../dto/update-medical-issue.dto");
const jwt_auth_guard_1 = require("../../auth/gurds/jwt-auth.guard");
const user_decorator_1 = require("../../auth/decorators/user.decorator");
const roles_guard_1 = require("../../auth/gurds/roles.guard");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const role_enum_1 = require("../../auth/role-enum/role.enum");
const common_response_dto_1 = require("../../request-response-handlers/dtos/common-response.dto");
let MedicalIssuesController = class MedicalIssuesController {
    constructor(medicalIssuesService) {
        this.medicalIssuesService = medicalIssuesService;
    }
    async create(createMedicalIssueDto) {
        const data = await this.medicalIssuesService.create(createMedicalIssueDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Medical Issue Create Success`, data);
    }
    findAll() {
        return this.medicalIssuesService.findAll();
    }
    findOne(id) {
        return this.medicalIssuesService.findOne(+id);
    }
    async update(id, updateMedicalIssueDto, user) {
        updateMedicalIssueDto.processedBy = user.username;
        const data = await this.medicalIssuesService.update(+id, updateMedicalIssueDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Medical Issue update Success`, data);
    }
    remove(id) {
        return this.medicalIssuesService.remove(+id);
    }
};
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medical_issue_dto_1.CreateMedicalIssueDto]),
    __metadata("design:returntype", Promise)
], MedicalIssuesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicalIssuesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicalIssuesController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medical_issue_dto_1.UpdateMedicalIssueDto, Object]),
    __metadata("design:returntype", Promise)
], MedicalIssuesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicalIssuesController.prototype, "remove", null);
MedicalIssuesController = __decorate([
    (0, common_1.Controller)('medical-issues'),
    __metadata("design:paramtypes", [medical_issues_service_1.MedicalIssuesService])
], MedicalIssuesController);
exports.MedicalIssuesController = MedicalIssuesController;
//# sourceMappingURL=medical-issues.controller.js.map