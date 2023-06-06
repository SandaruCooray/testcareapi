"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationalityModule = void 0;
const common_1 = require("@nestjs/common");
const nationality_service_1 = require("../services/nationality.service");
const nationality_controller_1 = require("../controllers/nationality.controller");
const nationality_entity_1 = require("../entities/nationality.entity");
const typeorm_1 = require("@nestjs/typeorm");
let NationalityModule = class NationalityModule {
};
NationalityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([nationality_entity_1.NationalityEntity])],
        controllers: [nationality_controller_1.NationalityController],
        providers: [nationality_service_1.NationalityService],
    })
], NationalityModule);
exports.NationalityModule = NationalityModule;
//# sourceMappingURL=nationality.module.js.map