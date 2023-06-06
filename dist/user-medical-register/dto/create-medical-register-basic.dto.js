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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMedicalRegisterBasicDto = exports.SEX = exports.USER_STATUS = void 0;
const class_validator_1 = require("class-validator");
var USER_STATUS;
(function (USER_STATUS) {
    USER_STATUS["SINGLE"] = "single";
    USER_STATUS["MARRIED"] = "married";
    USER_STATUS["WIDOWED"] = "widowed";
})(USER_STATUS = exports.USER_STATUS || (exports.USER_STATUS = {}));
var SEX;
(function (SEX) {
    SEX["MALE"] = "male";
    SEX["FEMALE"] = "female";
    SEX["OTHER"] = "other";
})(SEX = exports.SEX || (exports.SEX = {}));
class CreateMedicalRegisterBasicDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "passport", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "gccNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "cmbNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateMedicalRegisterBasicDto.prototype, "honorific", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "sex", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateMedicalRegisterBasicDto.prototype, "doctor", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateMedicalRegisterBasicDto.prototype, "birthday", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateMedicalRegisterBasicDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "placeOfIssue", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateMedicalRegisterBasicDto.prototype, "place_of_birth", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateMedicalRegisterBasicDto.prototype, "nationality", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "remark", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "paymentType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateMedicalRegisterBasicDto.prototype, "treatments", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "fingerPrintRef", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateMedicalRegisterBasicDto.prototype, "position", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "photo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "medicalType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateMedicalRegisterBasicDto.prototype, "agency", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateMedicalRegisterBasicDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateMedicalRegisterBasicDto.prototype, "registeredDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMedicalRegisterBasicDto.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateMedicalRegisterBasicDto.prototype, "overAge", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateMedicalRegisterBasicDto.prototype, "recipientDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateMedicalRegisterBasicDto.prototype, "medicalCertificates", void 0);
exports.CreateMedicalRegisterBasicDto = CreateMedicalRegisterBasicDto;
//# sourceMappingURL=create-medical-register-basic.dto.js.map