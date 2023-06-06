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
exports.DoctorRemarkService = void 0;
const common_1 = require("@nestjs/common");
const doctor_remark_entity_1 = require("../entities/doctor-remark.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let DoctorRemarkService = class DoctorRemarkService {
    constructor(doctorRemarkEntityEntityRepository) {
        this.doctorRemarkEntityEntityRepository = doctorRemarkEntityEntityRepository;
    }
    async create(createDoctorRemarkDto) {
        const labRemarkRecord = await this.doctorRemarkEntityEntityRepository.save(createDoctorRemarkDto);
        return labRemarkRecord;
    }
    findAll() {
        return `This action returns all doctorRemark`;
    }
    findOne(id) {
        return `This action returns a #${id} doctorRemark`;
    }
    async update(id, updateDoctorRemarkDto) {
        const labRemarkRecord = await this.doctorRemarkEntityEntityRepository.update(id, updateDoctorRemarkDto);
        return labRemarkRecord;
    }
    remove(id) {
        return `This action removes a #${id} doctorRemark`;
    }
};
DoctorRemarkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(doctor_remark_entity_1.DoctorRemarkEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DoctorRemarkService);
exports.DoctorRemarkService = DoctorRemarkService;
//# sourceMappingURL=doctor-remark.service.js.map