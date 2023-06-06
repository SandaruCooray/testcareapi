"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabRemarkModule = void 0;
const common_1 = require("@nestjs/common");
const lab_remark_service_1 = require("../services/lab-remark.service");
const lab_remark_controller_1 = require("../controllers/lab-remark.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lab_remark_entity_1 = require("../entities/lab-remark.entity");
let LabRemarkModule = class LabRemarkModule {
};
LabRemarkModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lab_remark_entity_1.LabRemarkEntity])],
        controllers: [lab_remark_controller_1.LabRemarkController],
        providers: [lab_remark_service_1.LabRemarkService],
        exports: [lab_remark_service_1.LabRemarkService],
    })
], LabRemarkModule);
exports.LabRemarkModule = LabRemarkModule;
//# sourceMappingURL=lab-remark.module.js.map