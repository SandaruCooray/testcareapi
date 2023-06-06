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
exports.AuditTrailController = void 0;
const common_1 = require("@nestjs/common");
const audit_trail_service_1 = require("../services/audit-trail.service");
const create_audit_trail_dto_1 = require("../dto/create-audit-trail.dto");
const update_audit_trail_dto_1 = require("../dto/update-audit-trail.dto");
let AuditTrailController = class AuditTrailController {
    constructor(auditTrailService) {
        this.auditTrailService = auditTrailService;
    }
    create(createAuditTrailDto) {
        return this.auditTrailService.create(createAuditTrailDto);
    }
    findAll() {
        return this.auditTrailService.findAll();
    }
    findOne(id) {
        return this.auditTrailService.findOne(+id);
    }
    update(id, updateAuditTrailDto) {
        return this.auditTrailService.update(+id, updateAuditTrailDto);
    }
    remove(id) {
        return this.auditTrailService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_audit_trail_dto_1.CreateAuditTrailDto]),
    __metadata("design:returntype", void 0)
], AuditTrailController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuditTrailController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuditTrailController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_audit_trail_dto_1.UpdateAuditTrailDto]),
    __metadata("design:returntype", void 0)
], AuditTrailController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuditTrailController.prototype, "remove", null);
AuditTrailController = __decorate([
    (0, common_1.Controller)('audit-trail'),
    __metadata("design:paramtypes", [audit_trail_service_1.AuditTrailService])
], AuditTrailController);
exports.AuditTrailController = AuditTrailController;
//# sourceMappingURL=audit-trail.controller.js.map