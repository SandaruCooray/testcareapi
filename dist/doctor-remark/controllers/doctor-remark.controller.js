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
exports.DoctorRemarkController = void 0;
const common_1 = require("@nestjs/common");
const doctor_remark_service_1 = require("../services/doctor-remark.service");
const create_doctor_remark_dto_1 = require("../dto/create-doctor-remark.dto");
const update_doctor_remark_dto_1 = require("../dto/update-doctor-remark.dto");
const common_response_dto_1 = require("../../request-response-handlers/dtos/common-response.dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../../auth/gurds/jwt-auth.guard");
const roles_guard_1 = require("../../auth/gurds/roles.guard");
const role_enum_1 = require("../../auth/role-enum/role.enum");
let DoctorRemarkController = class DoctorRemarkController {
    constructor(doctorRemarkService) {
        this.doctorRemarkService = doctorRemarkService;
    }
    async create(id, createDoctorRemarkDto) {
        const data = await this.doctorRemarkService.create(createDoctorRemarkDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Doctor Remark Success`, data);
    }
    findAll() {
        return this.doctorRemarkService.findAll();
    }
    findOne(id) {
        return this.doctorRemarkService.findOne(+id);
    }
    async update(id, updateDoctorRemarkDto) {
        const data = await this.doctorRemarkService.update(+id, updateDoctorRemarkDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Doctor Remark Update Success`, data);
    }
    remove(id) {
        return this.doctorRemarkService.remove(+id);
    }
};
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_doctor_remark_dto_1.CreateDoctorRemarkDto]),
    __metadata("design:returntype", Promise)
], DoctorRemarkController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DoctorRemarkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoctorRemarkController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_doctor_remark_dto_1.UpdateDoctorRemarkDto]),
    __metadata("design:returntype", Promise)
], DoctorRemarkController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoctorRemarkController.prototype, "remove", null);
DoctorRemarkController = __decorate([
    (0, common_1.Controller)('doctor-remark'),
    __metadata("design:paramtypes", [doctor_remark_service_1.DoctorRemarkService])
], DoctorRemarkController);
exports.DoctorRemarkController = DoctorRemarkController;
//# sourceMappingURL=doctor-remark.controller.js.map