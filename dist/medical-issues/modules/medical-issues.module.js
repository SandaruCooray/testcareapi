"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalIssuesModule = void 0;
const common_1 = require("@nestjs/common");
const medical_issues_service_1 = require("../services/medical-issues.service");
const medical_issues_controller_1 = require("../controllers/medical-issues.controller");
const medical_issue_entity_1 = require("../entities/medical-issue.entity");
const typeorm_1 = require("@nestjs/typeorm");
let MedicalIssuesModule = class MedicalIssuesModule {
};
MedicalIssuesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([medical_issue_entity_1.MedicalIssueEntity])],
        controllers: [medical_issues_controller_1.MedicalIssuesController],
        providers: [medical_issues_service_1.MedicalIssuesService],
        exports: [medical_issues_service_1.MedicalIssuesService],
    })
], MedicalIssuesModule);
exports.MedicalIssuesModule = MedicalIssuesModule;
//# sourceMappingURL=medical-issues.module.js.map