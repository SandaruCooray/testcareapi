"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorRemarkModule = void 0;
const common_1 = require("@nestjs/common");
const doctor_remark_service_1 = require("../services/doctor-remark.service");
const doctor_remark_controller_1 = require("../controllers/doctor-remark.controller");
const typeorm_1 = require("@nestjs/typeorm");
const doctor_remark_entity_1 = require("../entities/doctor-remark.entity");
let DoctorRemarkModule = class DoctorRemarkModule {
};
DoctorRemarkModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([doctor_remark_entity_1.DoctorRemarkEntity])],
        controllers: [doctor_remark_controller_1.DoctorRemarkController],
        providers: [doctor_remark_service_1.DoctorRemarkService],
        exports: [doctor_remark_service_1.DoctorRemarkService],
    })
], DoctorRemarkModule);
exports.DoctorRemarkModule = DoctorRemarkModule;
//# sourceMappingURL=doctor-remark.module.js.map