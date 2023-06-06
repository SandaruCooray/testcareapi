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
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const doctor_entity_1 = require("../entities/doctor.entity");
let DoctorService = class DoctorService {
    constructor(doctorEntityRepository) {
        this.doctorEntityRepository = doctorEntityRepository;
    }
    async create(createDoctorRequest) {
        try {
            const data = await this.doctorEntityRepository.findOne({
                where: [{ code: createDoctorRequest.code }],
            });
            if (!data) {
                const newDoctor = new doctor_entity_1.DoctorEntity();
                newDoctor.name = createDoctorRequest.name;
                newDoctor.code = createDoctorRequest.code;
                newDoctor.address = createDoctorRequest.address;
                newDoctor.commissionRate = createDoctorRequest.commissionRate;
                newDoctor.fax = createDoctorRequest.fax;
                newDoctor.telePhone = createDoctorRequest.telePhone;
                await this.doctorEntityRepository.save(newDoctor);
                return newDoctor;
            }
            else {
                throw new common_1.HttpException({ message: `Duplicate Doctor Code` }, common_1.HttpStatus.FORBIDDEN);
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async findAll() {
        try {
            return await this.doctorEntityRepository.find();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async findOneById(id) {
        try {
            return await this.doctorEntityRepository.findOne({
                where: { id: id },
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async update(id, updateDoctorDto) {
        try {
            return await this.doctorEntityRepository.update(id, updateDoctorDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(doctor_entity_1.DoctorEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DoctorService);
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map