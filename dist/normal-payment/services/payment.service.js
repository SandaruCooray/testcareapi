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
exports.NormalPaymentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const payment_entity_1 = require("../entities/payment.entity");
let NormalPaymentService = class NormalPaymentService {
    async create(createPaymentDto) {
        try {
            const normalPaymentRecord = await this.normalPaymentEntityRepository.save(createPaymentDto);
            return normalPaymentRecord;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    findAll() {
        return `This action returns all payment`;
    }
    async findOne(id) {
        try {
            const normalPaymentRecord = await this.normalPaymentEntityRepository.findOne({
                where: { id },
            });
            return normalPaymentRecord;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async update(id, updatePaymentDto) {
        try {
            const normalPaymentRecord = await this.normalPaymentEntityRepository.update(id, updatePaymentDto);
            return normalPaymentRecord;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    remove(id) {
        return `This action removes a #${id} payment`;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(payment_entity_1.NormalPaymentEntity),
    __metadata("design:type", typeorm_2.Repository)
], NormalPaymentService.prototype, "normalPaymentEntityRepository", void 0);
NormalPaymentService = __decorate([
    (0, common_1.Injectable)()
], NormalPaymentService);
exports.NormalPaymentService = NormalPaymentService;
//# sourceMappingURL=payment.service.js.map