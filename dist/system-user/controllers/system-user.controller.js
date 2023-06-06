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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const common_response_dto_1 = require("../../request-response-handlers/dtos/common-response.dto");
const system_user_service_1 = require("../services/system-user.service");
const create_system_user_dto_1 = require("../dto/create-system-user.dto");
const update_system_user_dto_1 = require("../dto/update-system-user.dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const role_enum_1 = require("../../auth/role-enum/role.enum");
const jwt_auth_guard_1 = require("../../auth/gurds/jwt-auth.guard");
const roles_guard_1 = require("../../auth/gurds/roles.guard");
let UserController = class UserController {
    constructor(systemUsersService) {
        this.systemUsersService = systemUsersService;
    }
    async create(createUserDto) {
        const data = await this.systemUsersService.create(createUserDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `User Creation Success`, data);
    }
    async findAll() {
        const data = await this.systemUsersService.findAll();
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `User retrive Success`, data);
    }
    async update(id, updateSystemUserDto) {
        const data = await this.systemUsersService.update(+id, updateSystemUserDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `User update Success`, data);
    }
};
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_system_user_dto_1.CreateSystemUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_system_user_dto_1.UpdateSystemUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [system_user_service_1.SystemUsersService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=system-user.controller.js.map