"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MmrPaymentModule = void 0;
const common_1 = require("@nestjs/common");
const mmr_payment_service_1 = require("../services/mmr-payment.service");
const mmr_payment_controller_1 = require("../controllers/mmr-payment.controller");
const typeorm_1 = require("@nestjs/typeorm");
const mmr_payment_entity_1 = require("../entities/mmr-payment.entity");
let MmrPaymentModule = class MmrPaymentModule {
};
MmrPaymentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([mmr_payment_entity_1.MmrPaymentEntity])],
        controllers: [mmr_payment_controller_1.MmrPaymentController],
        providers: [mmr_payment_service_1.MmrPaymentService],
        exports: [mmr_payment_service_1.MmrPaymentService],
    })
], MmrPaymentModule);
exports.MmrPaymentModule = MmrPaymentModule;
//# sourceMappingURL=mmr-payment.module.js.map