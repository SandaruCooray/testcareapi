"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassportInquiryService = void 0;
const common_1 = require("@nestjs/common");
let PassportInquiryService = class PassportInquiryService {
    create(createPassportInquiryDto) {
        return 'This action adds a new passportInquiry';
    }
    findAll() {
        return `This action returns all passportInquiry`;
    }
    findOne(id) {
        return `This action returns a #${id} passportInquiry`;
    }
    update(id, updatePassportInquiryDto) {
        return `This action updates a #${id} passportInquiry`;
    }
    remove(id) {
        return `This action removes a #${id} passportInquiry`;
    }
};
PassportInquiryService = __decorate([
    (0, common_1.Injectable)()
], PassportInquiryService);
exports.PassportInquiryService = PassportInquiryService;
//# sourceMappingURL=passport-inquiry.service.js.map