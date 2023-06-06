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
exports.MedicalCertificateService = void 0;
const common_1 = require("@nestjs/common");
const medical_certificate_entity_1 = require("../entities/medical-certificate.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let MedicalCertificateService = class MedicalCertificateService {
    constructor(medicalCertificateEntityRepository) {
        this.medicalCertificateEntityRepository = medicalCertificateEntityRepository;
    }
    async create(createMedicalCertificateDto) {
        const medicalCertificateRecord = await this.medicalCertificateEntityRepository.save(createMedicalCertificateDto);
        return medicalCertificateRecord;
    }
    async findAll() {
        const medicalCertificateRecord = await this.medicalCertificateEntityRepository.find();
        return medicalCertificateRecord;
    }
    async findOne(id) {
        const medicalCertificate = await this.medicalCertificateEntityRepository.findOne({
            where: { id: id },
        });
        return medicalCertificate;
    }
    async update(id, updateMedicalCertificateDto) {
        const labRemarkRecord = await this.medicalCertificateEntityRepository.update(id, updateMedicalCertificateDto);
        return labRemarkRecord;
    }
    async findByIds(medicalCertificateIds) {
        console.log('medicalCertificateIds', medicalCertificateIds);
        const tmedicalrecodsPromises = medicalCertificateIds.map((id) => this.medicalCertificateEntityRepository.findOne({
            where: { id },
        }));
        const medicalrecods = await Promise.all(tmedicalrecodsPromises);
        return medicalrecods;
    }
    remove(id) {
        return `This action removes a #${id} medicalCertificate`;
    }
};
MedicalCertificateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(medical_certificate_entity_1.MedicalCertificateEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MedicalCertificateService);
exports.MedicalCertificateService = MedicalCertificateService;
//# sourceMappingURL=medical-certificate.service.js.map