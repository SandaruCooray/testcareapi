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
exports.MmrPaymentController = void 0;
const common_1 = require("@nestjs/common");
const mmr_payment_service_1 = require("../services/mmr-payment.service");
const create_mmr_payment_dto_1 = require("../dto/create-mmr-payment.dto");
const update_mmr_payment_dto_1 = require("../dto/update-mmr-payment.dto");
const common_response_dto_1 = require("../../request-response-handlers/dtos/common-response.dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../../auth/gurds/jwt-auth.guard");
const roles_guard_1 = require("../../auth/gurds/roles.guard");
const role_enum_1 = require("../../auth/role-enum/role.enum");
let MmrPaymentController = class MmrPaymentController {
    constructor(mmrPaymentService) {
        this.mmrPaymentService = mmrPaymentService;
    }
    create(createMmrPaymentDto) {
        return this.mmrPaymentService.create(createMmrPaymentDto);
    }
    findAll() {
        return this.mmrPaymentService.findAll();
    }
    findOne(id) {
        return this.mmrPaymentService.findOne(+id);
    }
    async update(id, updateMmrPaymentDto) {
        const data = await this.mmrPaymentService.update(+id, updateMmrPaymentDto);
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `MMR Payment Update Success`, data);
    }
    remove(id) {
        return this.mmrPaymentService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mmr_payment_dto_1.CreateMmrPaymentDto]),
    __metadata("design:returntype", void 0)
], MmrPaymentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MmrPaymentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MmrPaymentController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.HasRoles)(role_enum_1.Role.LEVEL_FOUR),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mmr_payment_dto_1.UpdateMmrPaymentDto]),
    __metadata("design:returntype", Promise)
], MmrPaymentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MmrPaymentController.prototype, "remove", null);
MmrPaymentController = __decorate([
    (0, common_1.Controller)('mmr-payment'),
    __metadata("design:paramtypes", [mmr_payment_service_1.MmrPaymentService])
], MmrPaymentController);
exports.MmrPaymentController = MmrPaymentController;
//# sourceMappingURL=mmr-payment.controller.js.map