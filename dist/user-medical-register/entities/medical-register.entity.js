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
exports.MedicalRegisterEntity = exports.SEX = exports.USER_STATUS = void 0;
const typeorm_1 = require("typeorm");
const city_entity_1 = require("../../city/entities/city.entity");
const honorific_entity_1 = require("../../honorific/entities/honorific.entity");
const nationality_entity_1 = require("../../nationality/entities/nationality.entity");
const doctor_entity_1 = require("../../doctor/entities/doctor.entity");
const position_entity_1 = require("../../position/entities/position.entity");
const agency_entity_1 = require("../../agency/entities/agency.entity");
const country_entity_1 = require("../../country/entities/country.entity");
const lab_remark_entity_1 = require("../../lab-remark/entities/lab-remark.entity");
const medical_issue_entity_1 = require("../../medical-issues/entities/medical-issue.entity");
const result_entry_entity_1 = require("../../result-entry/entities/result-entry.entity");
const delivery_entity_1 = require("../../delivery/entities/delivery.entity");
const doctor_remark_entity_1 = require("../../doctor-remark/entities/doctor-remark.entity");
const payment_entity_1 = require("../../normal-payment/entities/payment.entity");
const mmr_payment_entity_1 = require("../../mmr-payment/entities/mmr-payment.entity");
const medical_certificate_entity_1 = require("../../medical-certificate/entities/medical-certificate.entity");
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
let MedicalRegisterEntity = class MedicalRegisterEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MedicalRegisterEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', unique: true, nullable: false }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "passport", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "serialNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, default: null }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "gccNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, default: null }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "cmbNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "refNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "medicalType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => honorific_entity_1.HororificEntity, (honorofic) => honorofic.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", honorific_entity_1.HororificEntity)
], MedicalRegisterEntity.prototype, "honorificRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: SEX,
    }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: USER_STATUS,
    }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_entity_1.DoctorEntity, (doctor) => doctor.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", doctor_entity_1.DoctorEntity)
], MedicalRegisterEntity.prototype, "doctorRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: false }),
    __metadata("design:type", Date)
], MedicalRegisterEntity.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], MedicalRegisterEntity.prototype, "recipientDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], MedicalRegisterEntity.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "placeOfIssue", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.CityEntity, (city) => city.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", city_entity_1.CityEntity)
], MedicalRegisterEntity.prototype, "placeOfBirthRef", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => nationality_entity_1.NationalityEntity, (obj) => obj.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", nationality_entity_1.NationalityEntity)
], MedicalRegisterEntity.prototype, "nationalityRef", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => agency_entity_1.AgencyEntity, (agency) => agency.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", agency_entity_1.AgencyEntity)
], MedicalRegisterEntity.prototype, "agencyRef", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.CountryEntity, (country) => country.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", country_entity_1.CountryEntity)
], MedicalRegisterEntity.prototype, "countryRef", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => lab_remark_entity_1.LabRemarkEntity, (labRemark) => labRemark.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", lab_remark_entity_1.LabRemarkEntity)
], MedicalRegisterEntity.prototype, "labRemarkRef", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => doctor_remark_entity_1.DoctorRemarkEntity, (docRemark) => docRemark.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", doctor_remark_entity_1.DoctorRemarkEntity)
], MedicalRegisterEntity.prototype, "doctorRemarkRef", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => result_entry_entity_1.ResultEntryEntity, (resultEntry) => resultEntry.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", result_entry_entity_1.ResultEntryEntity)
], MedicalRegisterEntity.prototype, "resultEntryRef", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => delivery_entity_1.DeliveryEntity, (deliveryEntity) => deliveryEntity.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", delivery_entity_1.DeliveryEntity)
], MedicalRegisterEntity.prototype, "deliveryRef", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medical_issue_entity_1.MedicalIssueEntity, (medicalIssue) => medicalIssue.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", medical_issue_entity_1.MedicalIssueEntity)
], MedicalRegisterEntity.prototype, "medicalIssueRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar', default: null }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar', default: null }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "paymentType", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => medical_certificate_entity_1.MedicalCertificateEntity),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], MedicalRegisterEntity.prototype, "medicalCertificatesRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "fingerPrintRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar', default: null }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => position_entity_1.PositionEntity, (position) => position.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", position_entity_1.PositionEntity)
], MedicalRegisterEntity.prototype, "positionRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'date' }),
    __metadata("design:type", Date)
], MedicalRegisterEntity.prototype, "registeredDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar' }),
    __metadata("design:type", String)
], MedicalRegisterEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], MedicalRegisterEntity.prototype, "overAge", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], MedicalRegisterEntity.prototype, "approved", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar' }),
    __metadata("design:type", Date)
], MedicalRegisterEntity.prototype, "approvedTime", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => payment_entity_1.NormalPaymentEntity, (payment) => payment.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", payment_entity_1.NormalPaymentEntity)
], MedicalRegisterEntity.prototype, "normalPaymentRef", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => mmr_payment_entity_1.MmrPaymentEntity, (payment) => payment.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", mmr_payment_entity_1.MmrPaymentEntity)
], MedicalRegisterEntity.prototype, "mmrPaymentRef", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], MedicalRegisterEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], MedicalRegisterEntity.prototype, "updatedAt", void 0);
MedicalRegisterEntity = __decorate([
    (0, typeorm_1.Entity)('user_medical_registration')
], MedicalRegisterEntity);
exports.MedicalRegisterEntity = MedicalRegisterEntity;
//# sourceMappingURL=medical-register.entity.js.map