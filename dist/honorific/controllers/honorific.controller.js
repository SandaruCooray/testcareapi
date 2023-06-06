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
exports.HonorificController = void 0;
const common_1 = require("@nestjs/common");
const common_response_dto_1 = require("../../request-response-handlers/dtos/common-response.dto");
const honorific_service_1 = require("../services/honorific.service");
const create_honorific_dto_1 = require("../dto/create-honorific.dto");
const update_honorific_dto_1 = require("../dto/update-honorific.dto");
let HonorificController = class HonorificController {
    constructor(honorificService) {
        this.honorificService = honorificService;
    }
    async create(id, createHonorificDto) { }
    async findAll() {
        const data = await this.honorificService.findAll();
        return new common_response_dto_1.CommonResponseHandler(common_1.HttpStatus.OK, 'Success', `honorific retrieve Success`, data);
    }
    async update(id, updateHonorificDto) { }
    remove(id) {
        return this.honorificService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_honorific_dto_1.CreateHonorificDto]),
    __metadata("design:returntype", Promise)
], HonorificController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HonorificController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_honorific_dto_1.UpdateHonorificDto]),
    __metadata("design:returntype", Promise)
], HonorificController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HonorificController.prototype, "remove", null);
HonorificController = __decorate([
    (0, common_1.Controller)('honorific'),
    __metadata("design:paramtypes", [honorific_service_1.HonorificService])
], HonorificController);
exports.HonorificController = HonorificController;
//# sourceMappingURL=honorific.controller.js.map