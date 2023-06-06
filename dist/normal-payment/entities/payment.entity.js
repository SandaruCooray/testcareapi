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
exports.NormalPaymentEntity = void 0;
const medical_register_entity_1 = require("../../user-medical-register/entities/medical-register.entity");
const typeorm_1 = require("typeorm");
let NormalPaymentEntity = class NormalPaymentEntity {
};
__decorate([
    (0, typeorm_1.OneToOne)(() => medical_register_entity_1.MedicalRegisterEntity, (regObj) => regObj.normalPaymentRef),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NormalPaymentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar', default: null }),
    __metadata("design:type", Date)
], NormalPaymentEntity.prototype, "paymentDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar', default: null }),
    __metadata("design:type", String)
], NormalPaymentEntity.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], NormalPaymentEntity.prototype, "status", void 0);
NormalPaymentEntity = __decorate([
    (0, typeorm_1.Entity)('normal_payment')
], NormalPaymentEntity);
exports.NormalPaymentEntity = NormalPaymentEntity;
//# sourceMappingURL=payment.entity.js.map