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
exports.PassportInquiryController = void 0;
const common_1 = require("@nestjs/common");
const passport_inquiry_service_1 = require("../services/passport-inquiry.service");
const create_passport_inquiry_dto_1 = require("../dto/create-passport-inquiry.dto");
const update_passport_inquiry_dto_1 = require("../dto/update-passport-inquiry.dto");
let PassportInquiryController = class PassportInquiryController {
    constructor(passportInquiryService) {
        this.passportInquiryService = passportInquiryService;
    }
    create(createPassportInquiryDto) {
        return this.passportInquiryService.create(createPassportInquiryDto);
    }
    findAll() {
        return this.passportInquiryService.findAll();
    }
    findOne(id) {
        return this.passportInquiryService.findOne(+id);
    }
    update(id, updatePassportInquiryDto) {
        return this.passportInquiryService.update(+id, updatePassportInquiryDto);
    }
    remove(id) {
        return this.passportInquiryService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_passport_inquiry_dto_1.CreatePassportInquiryDto]),
    __metadata("design:returntype", void 0)
], PassportInquiryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PassportInquiryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PassportInquiryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_passport_inquiry_dto_1.UpdatePassportInquiryDto]),
    __metadata("design:returntype", void 0)
], PassportInquiryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PassportInquiryController.prototype, "remove", null);
PassportInquiryController = __decorate([
    (0, common_1.Controller)('passport-inquiry'),
    __metadata("design:paramtypes", [passport_inquiry_service_1.PassportInquiryService])
], PassportInquiryController);
exports.PassportInquiryController = PassportInquiryController;
//# sourceMappingURL=passport-inquiry.controller.js.map