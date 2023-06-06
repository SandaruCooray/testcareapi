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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const doctor_service_1 = require("../services/doctor.service");
const doctor_create_dto_1 = require("../dto/doctor-create.dto");
const doctor_update_dto_1 = require("../dto/doctor-update.dto");
const common_response_dto_1 = require("../../request-response-handlers/dtos/common-response.dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const role_enum_1 = require("../../auth/role-enum/role.enum");
const jwt_auth_guard_1 = require("../../auth/gurds/jwt-auth.guard");
const roles_guard_1 = require("../../auth/gurds/roles.guard");
let DoctorController = class DoctorController {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    async create(createDoctorRequest) {
        const data = await this.doctorService.create(createDoctorRequest);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Doctor Creation Success`, data);
    }
    findAll() {
        return this.doctorService.findAll();
    }
    findOneById(id) {
        return this.doctorService.findOneById(+id);
    }
    async update(id, updateDoctorDto) {
        const data = await this.doctorService.update(+id, updateDoctorDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Doctor Update Success`, data);
    }
};
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [doctor_create_dto_1.CreateDoctorRequest]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "findOneById", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, doctor_update_dto_1.UpdateDoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "update", null);
DoctorController = __decorate([
    (0, common_1.Controller)('doctor'),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService])
], DoctorController);
exports.DoctorController = DoctorController;
//# sourceMappingURL=doctor.controller.js.map