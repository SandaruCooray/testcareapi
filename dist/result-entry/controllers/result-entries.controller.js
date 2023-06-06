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
exports.ResultEntriesController = void 0;
const common_1 = require("@nestjs/common");
const result_entries_service_1 = require("../services/result-entries.service");
const update_result_entry_dto_1 = require("../dto/update-result-entry.dto");
const common_response_dto_1 = require("../../request-response-handlers/dtos/common-response.dto");
const create_result_entry_dto_1 = require("../dto/create-result-entry.dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../../auth/gurds/jwt-auth.guard");
const roles_guard_1 = require("../../auth/gurds/roles.guard");
const role_enum_1 = require("../../auth/role-enum/role.enum");
let ResultEntriesController = class ResultEntriesController {
    constructor(resultEntriesService) {
        this.resultEntriesService = resultEntriesService;
    }
    async create(createResultEntryDto) {
        const data = await this.resultEntriesService.create(createResultEntryDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Result Entry Success`, data);
    }
    findAll() {
        return this.resultEntriesService.findAll();
    }
    findOne(id) {
        return this.resultEntriesService.findOne(+id);
    }
    async update(id, updateResultEntryDto) {
        const data = await this.resultEntriesService.update(+id, updateResultEntryDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `Result Entry Update Success`, data);
    }
    remove(id) {
        return this.resultEntriesService.remove(+id);
    }
};
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_result_entry_dto_1.CreateResultEntryDto]),
    __metadata("design:returntype", Promise)
], ResultEntriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResultEntriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultEntriesController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_result_entry_dto_1.UpdateResultEntryDto]),
    __metadata("design:returntype", Promise)
], ResultEntriesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultEntriesController.prototype, "remove", null);
ResultEntriesController = __decorate([
    (0, common_1.Controller)('result-entries'),
    __metadata("design:paramtypes", [result_entries_service_1.ResultEntriesService])
], ResultEntriesController);
exports.ResultEntriesController = ResultEntriesController;
//# sourceMappingURL=result-entries.controller.js.map