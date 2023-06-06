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
exports.ReportsController = void 0;
const common_1 = require("@nestjs/common");
const reports_service_1 = require("../services/reports.service");
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    async getIssuedMedicalReport(fromDate, toDate, query) {
        const data = await this.reportsService.getIssuedMedicalReport(fromDate, toDate, query);
        return { reportData: data };
    }
    async getDeliveryReport(fromDate, toDate, query) {
        const data = await this.reportsService.getDeliveryReport(fromDate, toDate, query);
        return { reportData: data };
    }
    async medicalListReport(fromDate, toDate, query) {
        const data = await this.reportsService.medicalListReport(fromDate, toDate, query);
        return { reportData: data };
    }
    async regMedicalUserReport(fromDate, toDate, query) {
        console.log('fromDate', fromDate);
        console.log('toDate', toDate);
        console.log('query', query);
        const data = await this.reportsService.regMedicalUserReport(fromDate, toDate, query);
        return { reportData: data };
    }
    async medicaltestUserReport(fromDate, toDate, query, res) {
        console.log('query', query);
        const data = await this.reportsService.medicaltestUserReport(fromDate, toDate, query);
        if ((query === null || query === void 0 ? void 0 : query.excel) == 'true') {
            return res.json(data.data);
        }
        else {
            return res.render(data.template, { reportData: data.data });
        }
    }
};
__decorate([
    (0, common_1.Get)('issued-medical/:fromDate/:toDate'),
    (0, common_1.Render)('medical-issue-report'),
    __param(0, (0, common_1.Param)('fromDate')),
    __param(1, (0, common_1.Param)('toDate')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getIssuedMedicalReport", null);
__decorate([
    (0, common_1.Get)('medical-delivery/:fromDate/:toDate'),
    (0, common_1.Render)('delivery-report'),
    __param(0, (0, common_1.Param)('fromDate')),
    __param(1, (0, common_1.Param)('toDate')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getDeliveryReport", null);
__decorate([
    (0, common_1.Get)('medical-list/:fromDate/:toDate'),
    (0, common_1.Render)('medical-list-report'),
    __param(0, (0, common_1.Param)('fromDate')),
    __param(1, (0, common_1.Param)('toDate')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "medicalListReport", null);
__decorate([
    (0, common_1.Get)('reg-medical-user/:fromDate/:toDate'),
    (0, common_1.Render)('registered-user-report'),
    __param(0, (0, common_1.Param)('fromDate')),
    __param(1, (0, common_1.Param)('toDate')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "regMedicalUserReport", null);
__decorate([
    (0, common_1.Get)('medical-test-reports/:fromDate/:toDate'),
    __param(0, (0, common_1.Param)('fromDate')),
    __param(1, (0, common_1.Param)('toDate')),
    __param(2, (0, common_1.Query)()),
    __param(3, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "medicaltestUserReport", null);
ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
exports.ReportsController = ReportsController;
//# sourceMappingURL=reports.controller.js.map