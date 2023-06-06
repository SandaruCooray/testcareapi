"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HonorificModule = void 0;
const common_1 = require("@nestjs/common");
const honorific_entity_1 = require("../entities/honorific.entity");
const typeorm_1 = require("@nestjs/typeorm");
const honorific_controller_1 = require("../controllers/honorific.controller");
const honorific_service_1 = require("../services/honorific.service");
let HonorificModule = class HonorificModule {
};
HonorificModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([honorific_entity_1.HororificEntity])],
        controllers: [honorific_controller_1.HonorificController],
        providers: [honorific_service_1.HonorificService],
    })
], HonorificModule);
exports.HonorificModule = HonorificModule;
//# sourceMappingURL=honorific.module.js.map