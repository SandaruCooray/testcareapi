"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalCertificateModule = void 0;
const common_1 = require("@nestjs/common");
const medical_certificate_service_1 = require("../services/medical-certificate.service");
const medical_certificate_controller_1 = require("../controllers/medical-certificate.controller");
const typeorm_1 = require("@nestjs/typeorm");
const medical_certificate_entity_1 = require("../entities/medical-certificate.entity");
let MedicalCertificateModule = class MedicalCertificateModule {
};
MedicalCertificateModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([medical_certificate_entity_1.MedicalCertificateEntity])],
        controllers: [medical_certificate_controller_1.MedicalCertificateController],
        providers: [medical_certificate_service_1.MedicalCertificateService],
        exports: [medical_certificate_service_1.MedicalCertificateService],
    })
], MedicalCertificateModule);
exports.MedicalCertificateModule = MedicalCertificateModule;
//# sourceMappingURL=medical-certificate.module.js.map