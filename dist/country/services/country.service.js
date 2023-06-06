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
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const country_entity_1 = require("../entities/country.entity");
const typeorm_2 = require("typeorm");
let CountryService = class CountryService {
    constructor(countryEntityRepository) {
        this.countryEntityRepository = countryEntityRepository;
    }
    async create(createCountryDto) {
        try {
            const country = await this.countryEntityRepository.save(createCountryDto);
            return country;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async findAll() {
        try {
            const countries = await this.countryEntityRepository.find();
            return countries;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async findOne(id) {
        try {
            const country = await this.countryEntityRepository.findOne({
                where: { id: id },
            });
            return country;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async update(id, updateCountryDto) {
        try {
            const country = await this.countryEntityRepository.update(id, updateCountryDto);
            return country;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    remove(id) {
        return `This action removes a #${id} country`;
    }
};
CountryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(country_entity_1.CountryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CountryService);
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map