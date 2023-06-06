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
exports.ResultEntriesService = void 0;
const common_1 = require("@nestjs/common");
const result_entry_entity_1 = require("../entities/result-entry.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ResultEntriesService = class ResultEntriesService {
    constructor(resultEntryRepository) {
        this.resultEntryRepository = resultEntryRepository;
    }
    async create(createResultEntryDto) {
        try {
            const data = await this.resultEntryRepository.save(createResultEntryDto);
            return data;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    findAll() {
        return `This action returns all resultEnties`;
    }
    findOne(id) {
        return `This action returns a #${id} resultEntry`;
    }
    async update(id, updateResultEntryDto) {
        try {
            const data = await this.resultEntryRepository.update(id, updateResultEntryDto);
            return data;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    remove(id) {
        return `This action removes a #${id} resultEntry`;
    }
};
ResultEntriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(result_entry_entity_1.ResultEntryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ResultEntriesService);
exports.ResultEntriesService = ResultEntriesService;
//# sourceMappingURL=result-entries.service.js.map