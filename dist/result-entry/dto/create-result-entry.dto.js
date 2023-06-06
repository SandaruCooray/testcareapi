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
exports.CreateResultEntryDto = exports.MEDICAL_STATUS = void 0;
const class_validator_1 = require("class-validator");
var MEDICAL_STATUS;
(function (MEDICAL_STATUS) {
    MEDICAL_STATUS["UNFIT"] = "unfit";
    MEDICAL_STATUS["FIT"] = "fit";
    MEDICAL_STATUS["TEMPORARY_UNFIT"] = "temporary_unfit";
})(MEDICAL_STATUS = exports.MEDICAL_STATUS || (exports.MEDICAL_STATUS = {}));
class CreateResultEntryDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateResultEntryDto.prototype, "result", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateResultEntryDto.prototype, "healthStatus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateResultEntryDto.prototype, "printed", void 0);
exports.CreateResultEntryDto = CreateResultEntryDto;
//# sourceMappingURL=create-result-entry.dto.js.map