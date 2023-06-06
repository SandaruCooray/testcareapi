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
exports.DoctorRemarkEntity = void 0;
const medical_register_entity_1 = require("../../user-medical-register/entities/medical-register.entity");
const typeorm_1 = require("typeorm");
let DoctorRemarkEntity = class DoctorRemarkEntity {
};
__decorate([
    (0, typeorm_1.OneToOne)(() => medical_register_entity_1.MedicalRegisterEntity, (regObj) => regObj.doctorRemarkRef),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DoctorRemarkEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], DoctorRemarkEntity.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], DoctorRemarkEntity.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DoctorRemarkEntity.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], DoctorRemarkEntity.prototype, "mmr", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], DoctorRemarkEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], DoctorRemarkEntity.prototype, "updatedAt", void 0);
DoctorRemarkEntity = __decorate([
    (0, typeorm_1.Entity)('doctor_remark')
], DoctorRemarkEntity);
exports.DoctorRemarkEntity = DoctorRemarkEntity;
//# sourceMappingURL=doctor-remark.entity.js.map