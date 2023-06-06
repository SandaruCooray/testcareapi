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
exports.AgencyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const agency_entity_1 = require("../entities/agency.entity");
let AgencyService = class AgencyService {
    constructor(agencyEntityRepository) {
        this.agencyEntityRepository = agencyEntityRepository;
    }
    async create(createAgencyDto) {
        try {
            const agency = await this.agencyEntityRepository.save(createAgencyDto);
            return agency;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async findAll() {
        try {
            const agency = await this.agencyEntityRepository.find();
            return agency;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async findOne(id) {
        try {
            const agency = await this.agencyEntityRepository.findOne({
                where: { id: id },
            });
            return agency;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async update(id, updateAgencyDto) {
        try {
            const agency = await this.agencyEntityRepository.update(id, updateAgencyDto);
            return agency;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    remove(id) {
        return `This action removes a #${id} agency`;
    }
};
AgencyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(agency_entity_1.AgencyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AgencyService);
exports.AgencyService = AgencyService;
//# sourceMappingURL=agency.service.js.map