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
exports.DeliveryService = void 0;
const common_1 = require("@nestjs/common");
const delivery_entity_1 = require("../entities/delivery.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let DeliveryService = class DeliveryService {
    constructor(deliveryEntityRepository) {
        this.deliveryEntityRepository = deliveryEntityRepository;
    }
    async create(createDeliveryDto) {
        try {
            const delivery = await this.deliveryEntityRepository.save(createDeliveryDto);
            return delivery;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async findAll() {
        try {
            const delivery = await this.deliveryEntityRepository.find();
            return delivery;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    findOne(id) {
        return `This action returns a #${id} delivery`;
    }
    async update(id, updateDeliveryDto) {
        try {
            const delivery = await this.deliveryEntityRepository.update(id, updateDeliveryDto);
            return delivery;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    remove(id) {
        return `This action removes a #${id} delivery`;
    }
};
DeliveryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(delivery_entity_1.DeliveryEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DeliveryService);
exports.DeliveryService = DeliveryService;
//# sourceMappingURL=delivery.service.js.map