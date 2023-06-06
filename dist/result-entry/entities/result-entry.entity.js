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
exports.ResultEntryEntity = exports.MEDICAL_STATUS = void 0;
const medical_register_entity_1 = require("../../user-medical-register/entities/medical-register.entity");
const typeorm_1 = require("typeorm");
var MEDICAL_STATUS;
(function (MEDICAL_STATUS) {
    MEDICAL_STATUS["UNFIT"] = "unfit";
    MEDICAL_STATUS["FIT"] = "fit";
    MEDICAL_STATUS["TEMPORARY_UNFIT"] = "temporary_unfit";
})(MEDICAL_STATUS = exports.MEDICAL_STATUS || (exports.MEDICAL_STATUS = {}));
let ResultEntryEntity = class ResultEntryEntity {
};
__decorate([
    (0, typeorm_1.OneToOne)(() => medical_register_entity_1.MedicalRegisterEntity, (regObj) => regObj.resultEntryRef),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ResultEntryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: null, type: 'jsonb' }),
    __metadata("design:type", Object)
], ResultEntryEntity.prototype, "result", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'enum',
        enum: MEDICAL_STATUS,
    }),
    __metadata("design:type", String)
], ResultEntryEntity.prototype, "healthStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: null, type: 'jsonb' }),
    __metadata("design:type", Object)
], ResultEntryEntity.prototype, "printed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ResultEntryEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ResultEntryEntity.prototype, "updatedAt", void 0);
ResultEntryEntity = __decorate([
    (0, typeorm_1.Entity)('result_entry')
], ResultEntryEntity);
exports.ResultEntryEntity = ResultEntryEntity;
//# sourceMappingURL=result-entry.entity.js.map