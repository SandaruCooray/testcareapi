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
exports.MedicalCertificateController = void 0;
const common_1 = require("@nestjs/common");
const medical_certificate_service_1 = require("../services/medical-certificate.service");
const create_medical_certificate_dto_1 = require("../dto/create-medical-certificate.dto");
const update_medical_certificate_dto_1 = require("../dto/update-medical-certificate.dto");
const common_response_dto_1 = require("../../request-response-handlers/dtos/common-response.dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../../auth/gurds/jwt-auth.guard");
const roles_guard_1 = require("../../auth/gurds/roles.guard");
const role_enum_1 = require("../../auth/role-enum/role.enum");
let MedicalCertificateController = class MedicalCertificateController {
    constructor(medicalCertificateService) {
        this.medicalCertificateService = medicalCertificateService;
    }
    async create(createMedicalCertificateDto) {
        const data = await this.medicalCertificateService.create(createMedicalCertificateDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Medical Certificate Create Success`, data);
    }
    async findAll() {
        const data = await this.medicalCertificateService.findAll();
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Medical Certificate retriev Success`, data);
    }
    async findOne(id) {
        const data = await this.medicalCertificateService.findOne(+id);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Medical Certificate Success`, data);
    }
    async update(id, updateMedicalCertificateDto) {
        const data = await this.medicalCertificateService.update(+id, updateMedicalCertificateDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Medical Certificate Update Success`, data);
    }
    remove(id) {
        return this.medicalCertificateService.remove(+id);
    }
};
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medical_certificate_dto_1.CreateMedicalCertificateDto]),
    __metadata("design:returntype", Promise)
], MedicalCertificateController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MedicalCertificateController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicalCertificateController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medical_certificate_dto_1.UpdateMedicalCertificateDto]),
    __metadata("design:returntype", Promise)
], MedicalCertificateController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicalCertificateController.prototype, "remove", null);
MedicalCertificateController = __decorate([
    (0, common_1.Controller)('medical-certificate'),
    __metadata("design:paramtypes", [medical_certificate_service_1.MedicalCertificateService])
], MedicalCertificateController);
exports.MedicalCertificateController = MedicalCertificateController;
//# sourceMappingURL=medical-certificate.controller.js.map