"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalRegisterModule = void 0;
const common_1 = require("@nestjs/common");
const medical_register_service_1 = require("../services/medical-register.service");
const medical_register_controller_1 = require("../controllers/medical-register.controller");
const typeorm_1 = require("@nestjs/typeorm");
const medical_register_entity_1 = require("../entities/medical-register.entity");
const lab_remark_module_1 = require("../../lab-remark/modules/lab-remark.module");
const medical_issues_module_1 = require("../../medical-issues/modules/medical-issues.module");
const result_entries_module_1 = require("../../result-entry/modules/result-entries.module");
const delivery_module_1 = require("../../delivery/modules/delivery.module");
const doctor_remark_module_1 = require("../../doctor-remark/modules/doctor-remark.module");
const payment_module_1 = require("../../normal-payment/modules/payment.module");
const mmr_payment_module_1 = require("../../mmr-payment/modules/mmr-payment.module");
const medical_certificate_module_1 = require("../../medical-certificate/modules/medical-certificate.module");
let MedicalRegisterModule = class MedicalRegisterModule {
};
MedicalRegisterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([medical_register_entity_1.MedicalRegisterEntity]),
            lab_remark_module_1.LabRemarkModule,
            medical_issues_module_1.MedicalIssuesModule,
            result_entries_module_1.ResultEntriesModule,
            delivery_module_1.DeliveryModule,
            doctor_remark_module_1.DoctorRemarkModule,
            payment_module_1.NormalPaymentModule,
            mmr_payment_module_1.MmrPaymentModule,
            medical_certificate_module_1.MedicalCertificateModule,
        ],
        controllers: [medical_register_controller_1.MedicalRegistersController],
        providers: [medical_register_service_1.MedicalRegisterService],
        exports: [medical_register_service_1.MedicalRegisterService],
    })
], MedicalRegisterModule);
exports.MedicalRegisterModule = MedicalRegisterModule;
//# sourceMappingURL=medical-register.module.js.map