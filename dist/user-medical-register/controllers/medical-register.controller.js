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
exports.MedicalRegistersController = void 0;
const common_1 = require("@nestjs/common");
const medical_register_service_1 = require("../services/medical-register.service");
const update_medical_register_dto_1 = require("../dto/update-medical-register.dto");
const common_response_dto_1 = require("../../request-response-handlers/dtos/common-response.dto");
const create_medical_register_basic_dto_1 = require("../dto/create-medical-register-basic.dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../../auth/gurds/jwt-auth.guard");
const roles_guard_1 = require("../../auth/gurds/roles.guard");
const role_enum_1 = require("../../auth/role-enum/role.enum");
let MedicalRegistersController = class MedicalRegistersController {
    constructor(medicalRegisterService) {
        this.medicalRegisterService = medicalRegisterService;
    }
    async create(createMedicalRegisterBasicDto) {
        const data = await this.medicalRegisterService.create(createMedicalRegisterBasicDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Mediacal Registration Success`, data);
    }
    async findAllByDate(currentDate) {
        const data = await this.medicalRegisterService.findByDate(currentDate);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Retrive All Mediacal Registration Success`, data);
    }
    async findOneByUniqueID(query) {
        const data = await this.medicalRegisterService.findOneByUniqueID(query);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Retrive Mediacal Registrations Success`, data);
    }
    async findAll() {
        const data = await this.medicalRegisterService.findAll();
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Retrive Mediacal Registrations Success`, data);
    }
    async generateSerialNo() {
        const data = await this.medicalRegisterService.generateSerialNo();
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Generate RefNo Success`, data);
    }
    async findOneById(id) {
        console.log('id', id);
        const data = await this.medicalRegisterService.findOneById(+id);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Retrive Mediacal Registration Success`, data);
    }
    async update(id, updateMedicalRegisterDtoDto) {
        const data = await this.medicalRegisterService.updateRegMedical(+id, updateMedicalRegisterDtoDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', ` Medical Registration Update Success`, data);
    }
    async pagination(take, skip) {
        const data = await this.medicalRegisterService.pagination(take, skip);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', ` Medical Registration Retrive Success`, data);
    }
    async statusChange(id, status) {
        const data = await this.medicalRegisterService.statusChange(id, status);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', ` Medical Registration Approved Success`, data);
    }
};
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medical_register_basic_dto_1.CreateMedicalRegisterBasicDto]),
    __metadata("design:returntype", Promise)
], MedicalRegistersController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('date/:currentDate'),
    __param(0, (0, common_1.Param)('currentDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], MedicalRegistersController.prototype, "findAllByDate", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('unique-id'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MedicalRegistersController.prototype, "findOneByUniqueID", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MedicalRegistersController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('generate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MedicalRegistersController.prototype, "generateSerialNo", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicalRegistersController.prototype, "findOneById", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medical_register_dto_1.UpdateMedicalRegisterDto]),
    __metadata("design:returntype", Promise)
], MedicalRegistersController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('pagination'),
    __param(0, (0, common_1.Query)('take')),
    __param(1, (0, common_1.Query)('skip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MedicalRegistersController.prototype, "pagination", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)('/register-status/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], MedicalRegistersController.prototype, "statusChange", null);
MedicalRegistersController = __decorate([
    (0, common_1.Controller)('medical-register'),
    __metadata("design:paramtypes", [medical_register_service_1.MedicalRegisterService])
], MedicalRegistersController);
exports.MedicalRegistersController = MedicalRegistersController;
//# sourceMappingURL=medical-register.controller.js.map